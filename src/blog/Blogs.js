import { Link } from "react-router-dom";


const Blogs = (props) => {
    const blogs = props.blogs;
    // const handleDelete = props.handleDelete;
    

return(
<div className="flex-container">
    <div className="blogContainer">
    {blogs.map((blog) => (
        
        <div className="blog">
            <div className="content-tab">
            <Link to={`/blogs/${blog.id}`}>
                <img src="user.jpg" alt="avatar"></img> 
            <div className="info">
                <p className="blog-title white" key={blog.id}>{blog.title}</p>
                <p className="author"><span className="by">written by: </span>  {blog.author}</p>
            </div>
                </Link>
            </div>
        </div>
        
))}
    </div>
</div>
)};



export default Blogs;