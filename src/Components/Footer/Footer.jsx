import React from "react";
import "./Footer.css"

const Year = new Date().getFullYear(); 

function Footer(){
    return(
        <div className="footer">
            Copyright @ {Year} Soham Dey, All right received
        </div>
    );
}

export default Footer;