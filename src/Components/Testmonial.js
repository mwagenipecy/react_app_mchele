import react from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";


const Testmonial= ()=>{
    return <div className="work-section-wrapper">
         <div className="work-section-top">
             <p className="primary-subheading">
                 Testimonials
             </p>
             <h1 className="primary-heading">  What they are saying</h1>
             <div className="primary-text">
                 organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce, ensuring that buyers can interact with sellers in a secure and user-friendly manner.
             </div>
             <div className="testimonial-section-bottom">
                 <img src={ProfilePic}/>
                 <p className={'here'}>
                     organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce, ensuring that buyers can interact with sellers in a secure and user-friendly manner.
                 </p>
                 <div className="testimonials-stars-container">
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                     <AiFillStar/>
                 </div>
                 <h2>  Percy Egno</h2>
             </div>
         </div>
    </div>;
};

export default Testmonial;