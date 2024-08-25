import React, {useRef} from "react";
import "./Form.css";
import Nav from "../Home/Nav";
import Footer from "../Footer/Footer";
import SocialIcons from "../Home/SocialIcons";
import emailjs from '@emailjs/browser';

function Form(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3gwfmg', 'template_yu5ni6v', form.current, 'Q32Q-MIWooGira0W_')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email successfully send")
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div>
            <Nav />
            <h1 className="contact">Contact Me</h1>
            <p className="contactdesc">Please fill the below form to discuss about any work opportunities</p>
            <form className="form" ref={ form } onSubmit={ sendEmail }>
                <input type="text" className="name" placeholder="Type your name" name="your_name" autoComplete="off" required/>
                <input type="email" className="email" placeholder="Type your email address" name="your_email" autoComplete="off" required/>
                <textarea rows={5} className="msg" placeholder="Type your message" name="message" autoComplete="off" required/>
                <button type="submit" className="btn" value="send">Submit</button> 
                <SocialIcons />
            </form>
            <Footer />
        </div>
    );
}

export default Form;