import "./BottomHeader.css"
import logo from './Spatium Logo 1@3x 1.png'
import { Link } from "react-router-dom"

export default function BottomHeader(){
    return(
        <div className="navbar">
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <Link to="/">
                    <li>Home </li>
                    </Link>

                    <Link to="/about-us">
                    <li>About Us</li>
                    </Link>

                    <li>Portfolio</li>
                    <li>Management Profile</li>
                    <li>Carrers</li>
                    <a href="" id="con">Contact Us</a>
                </ul>
            </nav>
        </div>

    )
}