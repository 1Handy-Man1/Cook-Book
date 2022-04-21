// import React, {} from "react";
import { Link } from "react-router-dom";
import '../style/main.css';
import Chicken from "../images/ChickenBreast.JPEG";
import Cookies from "../images/Cookies.JPEG";
import Potatoe from "../images/Potatoe.JPEG";

function Home(){

    return(
        <div className="homeContainer">
            <div className="intoText">
                <p>Hello, visitor</p>
                <p>I'm Expédier and these are my food</p>
            </div>
            <div className="imageDisplay">
                <div>
                    <Link to="Recipe">
                        <img src={Chicken} alt="Food Display"></img>
                    </Link>
                </div>
                <div>
                    <Link to="Recipe">
                        <img src={Cookies} alt="Food Display"></img>
                    </Link>
                </div>
                <div>
                    <Link to="Recipe">
                        <img src={Potatoe} alt="Food Display"></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;