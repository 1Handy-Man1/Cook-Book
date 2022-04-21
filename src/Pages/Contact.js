import React, {} from "react";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import Tweeter from "../images/tweeter.png";
import Youtube from "../images/youtube.png";
import Me from "../images/ContactSelf.JPEG";
import '../style/main.css';

const Contact = () => {
    return(
        <div>
            <div className="contactInfo">
                <div className="self">
                    <img src={Me} alt="Self"></img>
                    <p>Here is where you can see all my social media that I 100% post on.</p>
                </div>
                <div className="socialMedia">
                    <a href="https://www.facebook.com/gordonramsay"><img alt="Facebook" src={Facebook}></img></a>
                    <a href="https://www.instagram.com/gordongram/"><img alt="Instagram" src={Instagram}></img></a>
                    <a href="https://mobile.twitter.com/gordonramsay?lang=en"><img alt="Tweeter" src={Tweeter}></img></a>
                    <a href="https://www.youtube.com/user/gordonramsay"><img alt="Youtube" src={Youtube}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;