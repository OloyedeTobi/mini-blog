import Blogs from './Blogs';
import useFetch from './useFetch';
// import img from './components/user.jpg';

const Home = () => {
 
const {data: blogs, pending, error} = useFetch('http://localhost:8000/blogs');

    return(
        <div>
            {pending && <p style={{color: 'black', fontSize:'1.5rem', fontFamily:'sans-serif'}}>loading...</p> }
            {error && <p style={{color: 'white', fontSize:'1.5rem', marginLeft: '2em'}}>Resources Not Found...</p>}
            {blogs && <Blogs  blogs={blogs}/>}

        </div>
    )
}

export default Home;
