import react from 'react'
import Navbar from "./Navbar";
import BannerBackground from  '../Assets/home-banner-background.png';
import BannerImage from  "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";



const Homen =()=>{
    return <div className="home-container">
          <Navbar />

        <div className="home-banner-container">
            <div className="home-bannerImage-container">
             <img src={BannerBackground}/>
            </div>
            <div className="home-text-section" >
               <h1  className="primary-heading">
                   Your Favourite are here
               </h1>
                <p className="primary-text">
                    to their shopping carts, and make purchases. Buyers typically need to create an account and provide necessary information to access the platform and conduct transactions.
                </p>
                <button className="secondary-button">
                    make order <FiArrowRight/>
                </button>
            </div>
        </div>

        <div className="home-image-container">
            <img src={BannerImage} alt={'hello'}/>

        </div>

        <img src="assets/login.gif" alt="" className="object-cover h-screen w-full" />

    </div>;
};

export default Homen;