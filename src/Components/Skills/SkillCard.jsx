import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";


function SkillCard(props){
    return(
        <div>
            <div className="container">
                <div className="box">
                    <img className="SkillIcon"
                        src={ props.img }
                        alt="error"
                    />
                    <h2 className="skillHead">{ props.name }</h2>
                </div>
                <p>{ props.body }</p>

                <div className="bar">
                    <ProgressBar bgColor="#60A5FA" height="12px" width="90%" completed={ props.progress } customLabel={ props.progress + "%"} labelAlignment="center" animateOnRender />
                </div>
            </div>
        </div>
    )
}

export default SkillCard;