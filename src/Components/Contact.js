import react from "react";


const Contact = () =>{
    return <div className="contact-page-wrapper">
          <h1 className="primary-heading"> Have any Question ?</h1>
          <h1 className="primary-heading"> let us help you</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="john@gmail.com"/>
            <button className="secondary-button">Submit</button>
        </div>
    </div>;
};

export default Contact;