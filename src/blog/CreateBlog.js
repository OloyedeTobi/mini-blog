import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () =>{

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [body, setBody] = useState("");
    const [pending , setPending] = useState(false);
    const history = useHistory();

const handleSubmit = (e) =>  {
    e.preventDefault()
    const blog = {title, author, body};

    setPending(true);

    fetch("http://localhost:8000/blogs", {
       method: 'POST',
       headers: {"Content-type": "application/json" },
       body: JSON.stringify(blog)
       }).then(() => {
        setPending(false)
        history.push('/');
    }) 
}

    return(
        <div className="form-area">
            <form  className="form" onSubmit={handleSubmit}>
                <div>
                    <label><br></br><br></br>
                       Blog Title <br></br><input className="input" type="text" placeholder="Title..." value={title} onChange={(e) => {setTitle(e.target.value)}} required />
                    </label>
                </div>
                <div>
                    <label>
                       Blog Author <br></br><input className="input" type="text" placeholder="Author..." value={author} onChange={(e) => {setAuthor(e.target.value)}} required />
                    </label>
                </div>
                <div>
                    <label>
                       Blog Title<br></br><textarea className="input text-area" type="text" placeholder="create blog..." value={body} onChange={(e) => {setBody(e.target.value)}} required></textarea>
                    </label>
                </div>
                <div>
                  {pending && <button className="add-btn pending" disabled>Adding Blog...</button>} 
                  {!pending && <button className="add-btn">Add Blog</button>}
               </div>
            </form>
        </div>
    )
}



export default CreateBlog;