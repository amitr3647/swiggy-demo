 import { Link } from "react-router-dom";
import  "./Header.css";
import { LOGO_URL } from "../../utils/constants";
 const Header = ()=>{
    return (
<div className="header">
    <div className="icon">
        <img height='100px' src={LOGO_URL}></img>
    </div>
    <div className="navbar-menu">
        <ul>
           <Link to="/"> <li>Home</li></Link>
         <Link to="/about">   <li>About Us</li></Link>
         <Link to="/contact">  <li>Contact</li></Link>

            
            <li>Cart</li>
        </ul>
    </div>
</div>
    )
}
export default Header;