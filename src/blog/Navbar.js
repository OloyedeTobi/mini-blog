import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from 'react-icons/ai';

const Navbar = () => {
   const [sidebar, setSidebar] = useState(false);

   const showSidebar = () => setSidebar(!sidebar);



    return (
<div className="navbar">
    <div>
      <h3 className="brand">
         shades
       </h3>
    </div>
 <div className= {`${sidebar ?  `nav` : `nav-dissappear`}`}  >
    <Link to="/" onClick={showSidebar} activeClassName="active">Home</Link>
    <Link to="/blogs" onClick={showSidebar}>New post</Link>
 </div>
 <div className="icon" onClick={showSidebar}>
      {sidebar ?  <AiIcon.AiOutlineClose color='white'/> : <FaIcon.FaBars color ='white'/> }
    </div>
</div>

 )
}


export default Navbar;