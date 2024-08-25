import React from "react";
import Nav from "./Home/Nav";
import file from "../Images/Soham_Dey.pdf";
import "./Home/Home.css";
import Footer from "./Footer/Footer";

function CV() {
    return(
        <div> 
            <Nav />
            <h2>
                Hello! Click the below button to get my resume 😊 <br /><br />
            </h2>
            <a 
                href={file}
                target="_blank"
                rel="noreferrer"
                style={{textDecoration: "none" , display: "inline-block"}}
            >
                <button className="resume">
                    Resume
                </button>
            </a>
            <Footer />
        </div>
    )
}

export default CV