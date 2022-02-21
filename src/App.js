
import './index.css';
import Navbar from './blog/Navbar';
import Home from './blog/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateBlog from './blog/CreateBlog';
import BlogContent from './blog/BlogContent';
import Footer from './blog/Footer';


  function App() {

    
     return (
<Router>
      <div className="App">
          <Navbar />
           <Switch>
             <Route exact path="/">
               <Home />
               <Footer /> 
             </Route>
             <Route exact path="/blogs">
               <CreateBlog />
            </Route> 
            <Route exact path="/blogs/:id">
              <BlogContent />
            </Route>
          </Switch>
      </div>
  </Router>
          
      );
  }
      
     
export default App;
