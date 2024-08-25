import React from "react";
import SocialIcons from "../Home/SocialIcons";
import Nav from "../Home/Nav";
import logo from "../../Images/SohamDey.jpg";
import Footer from "../Footer/Footer";

function Home(){
    return (
        <div>
        <div className="intro">
            <Nav />
            <h1>Welcome to my Website</h1>
            <div className="para">            
                Hello! I am Soham Dey. I am a first year student pursunig Master's in Computer Application (MCA) from Future Institute of Engineering and Management. I am a passionate front end developer and currently  I have learned React js and using my knowledge I am creating this portfolio Website.<br /> <br />
            
                I am a self-taught developer with a high dream of success in software developement. I hope you will like my website.
                
                <img className="logo"
                    src={logo}
                    alt="error"
                />
            </div>
        </div>
            <h2 className="social">
                Connect with me here :) <br /><br />
                <SocialIcons />
            </h2>
            <Footer />
        </div>
    );
}

export default Home;