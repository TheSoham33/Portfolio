import React from "react";
import "./Error.css";
import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <div className="errorCont">
            <div className="error">
                <h1>
                    404 error!
                </h1>
                <p>Sorry this page doesnot exist </p> <br />
                <img className="errorImg" 
                    src="https://cdn3.iconfinder.com/data/icons/computer-emoticon/24/computer_emoticon_emoji-11-512.png"
                    alt="Error"
                />
            </div>
            <div className="errorBtnset">
                <NavLink className={"errorBtn"} to={"/"}>Go Back</NavLink>
            </div>
        </div>
    )
}

export default Error;