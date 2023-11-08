import react from "react";
import AboutBackground from  "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";

const About =()=>{
    return <div className="about-section-container">
           <div className="about-background-image-container">
               <img  src={AboutBackground} alt={'bg' }/>
           </div>
        <div className="about-section-image-container">
              <img src={AboutBackgroundImage}/>
        </div>
        <div className="about-section-text-container">
             <p className="primary-subheading">
                 About
             </p>
            <h1 className="primary-heading">
                Order History
            </h1>
            <p className="primary-text">
                with access to an e-commerce platform can typically view their order history, track shipments, and manage their account settings.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Learn more</button>
                <button className="watch-video-button">  <BsFillPlayCircleFill/> </button>
            </div>
        </div>

    </div>;
};

export default About;