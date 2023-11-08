import react from "react";
import PickMeals from  "../Assets/pick-meals-image.png";
import  ChooseMeals from  "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";



const Word=()=>{
    const workInData=[
        {
            image:PickMeals,
            title:"Pick Meals",
            text:" organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce,",
        },
        {
            image:ChooseMeals,
            title:"Choose Meals",
            text:" organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce,",
        },
        {
            image:DeliveryMeals,
            title:"Delivery Meals",
            text:" organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce,",
        },

    ];

    return <div className="work-section-wrapper">
         <div className="work-section-top">
             <p className="primary-subheading">Work</p>
             <h1 className="primary-heading">How it works</h1>
             <p className="primary-text">
                 organizations to engage in purchasing activities on e-commerce platforms. It is an essential concept in online commerce, ensuring that buyers can interact with sellers in a secure and user-friendly manner.
                 Work</p>

         </div>
        <div className="work-section-bottom">
            {
                workInData.map((data)=>(
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image}/>
                        </div>
                        <h2>{ data.title} </h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>;
};

export default Word;