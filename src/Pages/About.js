import React, {} from "react";
import Gusteau from "../images/Gusteau's.png";
import '../style/main.css';
import Me from "../images/AboutSelfMe.JPEG";
import Me2 from "../images/AboutSelfMe2.JPEG"

const About = () => {
    return(
        <div>
            <div className="InfoAboutMe">
                <img src={Me} alt="About Me display"></img>
                <p id="childPar1">
                    Bonne journée, I'm Hanad Expédier a French that travels around the world finding foods that I'm interested in.
                    I was born in France, Lyon in 1995 February 4 raised by my mom after me dad pass away from a terrible disease called the (IRS) Irrelevant Radioactive Sickness.
                    I move next to Italy, Padua in 2000 March 28 living with my mom and I was amazed about the view and the food Club del Doge Restaurant next to us was the best restaurant.
                    That was then I want to explore finding the type of food around the world or how much money do I have to travel because I'm not rich but was brook 1 time at the age of 22. 
                </p>
            </div>
            <div className="InfoAboutMe">
                <p id="childPar2">
                    I'm an entrepreneurial who seeks to discover good food that I've blog in this website.
                    I'm no the best person to check whose food is better but I list what food I'm interested in.
                    Finding food is mostly my hobby and passion but want to become an evaluator so I can professionally taste food and judge them by my experience.
                    The places I have been are: France, Italy, Germany, Russia, China, Japan, United States, Australia, Canada, Africa, Mexico, Switzerland, and Ireland.
                </p>
                <img src={Me2} alt="About Me display"></img>
            </div>
        </div>
    )
}

export default About;