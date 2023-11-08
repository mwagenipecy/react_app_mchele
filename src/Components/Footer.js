import react from "react";
import Logo from "../Assets/Logo.svg"
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";

const Footer=()=>{

    return <div className="footer-wrapper">
         <div className="footer-section-one">
             <div className="footer-logo-container">
                 <img src={Logo}/>
             </div>
             <div className="footer-icons">
                 <BsTwitter/>
                 <SiLinkedin/>
                 <BsYoutube/>
                 <FaFacebook/>

             </div>
         </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span> Quality</span>
                <span> Help</span>
                <span> Share</span>
                <span> Carrers</span>
                <span> Testimonials</span>
                <span> work</span>
            </div>

            <div className="footer-section-columns">
                <span>
                    +22567 856-456-2
                </span>
                <span> Info@gmail.com</span>
                <span> Info@gmail.com</span>
                <span> Info@gmail.com</span>
            </div>
            <div className="footer-section-columns">
                <span> Terms & Condition </span>
                <span> privacy policy </span>
            </div>
        </div>
    </div>;
};

export  default Footer;