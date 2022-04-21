import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Gusteau from "../images/Gusteau's.png";
import '../style/main.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

   

    return(
        <div>
            <nav>
                <img src={Gusteau} alt="Logo"></img>
                {(toggleMenu || screenWidth > 700) && (
                    <ul>
                    <li>
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="About">
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="Contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="Recipe">
                            <p>Recipe</p>
                        </Link>
                    </li>
                </ul>
                )}
                <button onClick={toggleNav}><i class="fa-solid fa-bars"></i></button>
            </nav>
        </div>
    )
}


export default Navbar;