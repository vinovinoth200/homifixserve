import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="nav">
            <Link to="/" className="site-title">HomiFixServ</Link>
            <ul> 
               <li className="">
                     <Link to="/">Home</Link>
                </li>
                <li>
                     <Link to="/areas">Areas</Link>
                </li> 
                <li>
                     <Link to="/aboutus">About Us</Link>
                </li>
               
            </ul>
        </nav>
       
        </>
    )
}