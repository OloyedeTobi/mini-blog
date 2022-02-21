import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch  from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const BlogContent = () =>{
    const { id } = useParams(); 
    const { data: blog, pending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = (e) => {
       e.preventDefault();

       fetch("http://localhost:8000/blogs/" + blog.id , {
           method: 'DELETE'
       }).then(() =>{
           history.push ("/")
       })
    }

    return(
        <div className="blog-content">
            {pending && <p>loading...</p> }
            {error && <p>you've done rubbish</p>}
            {blog && (
              <article>
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-title">author: {blog.author}</p>
                  <div className="blog-body">
                      {blog.body}
                  </div>
                  <button className="delete-blog"  onClick={handleDelete}>Delete</button>
              </article>
            )}
        </div>
    );
}

export default BlogContent;