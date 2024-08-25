import React from "react";
import Nav from "../Home/Nav";
import "./Skills.css";
import Footer from "../Footer/Footer";
import SkillCard from "./SkillCard";
import SkillInfront from "./SkillInfo";
import SkillBack from "./SkillBack";
import "../Home/Home.css"
import SkillUiUx from "./SkillUiUx";
import SkillSub from "./SkillSub";

function CreateInfo(SkillInfront){
    return(
        
        <SkillCard 
            key = {SkillInfront.id}
            name = {SkillInfront.name}
            img = {SkillInfront.img}
            body = {SkillInfront.body}
            progress = {SkillInfront.progress}
        />
    )
}

function CreateBackInfo(SkillBack){
    return(
        <SkillCard 
            key = {SkillBack.id}
            name = {SkillBack.name}
            img = {SkillBack.img}
            progress = {SkillBack.progress}
        />
    )
}

function CreateUIUx(SkillUiUx){
    return(
        <SkillCard 
            key = {SkillUiUx.id}
            name = {SkillUiUx.name}
            img = {SkillUiUx.img}
            progress = {SkillUiUx.progress}
        />
    )
}

function CreateSub(SkillSub){
    return(
        <SkillCard
            key = {SkillSub.id}
            name = {SkillSub.name}
            img = {SkillSub.img}
            progress = {SkillSub.progress}
        />
    )
}

function Skills() {
    return(
        <div>
            <Nav />
            <div className="head">
                <h1>My Skills </h1>
            </div>
            <div className="subhead">
                <h2>Front-End</h2>
            </div>
            {SkillInfront.map(CreateInfo)}   
            <div className="subhead">
            </div>       
            <div className="others">
                <div className="othersbox">
                <h2 className="otherssubhead">Back-End</h2>
                    {SkillBack.map(CreateBackInfo)}
                </div>
                <div className="othersbox">
                <h2 className="otherssubhead">UI-UX Design</h2>
                    {SkillUiUx.map(CreateUIUx)}
                </div>
                <div className="othersbox">
                <h2 className="otherssubhead">Computer Subjects/Languages</h2>
                    {SkillSub.map(CreateSub)}
                </div>
            </div>  
            <Footer />
        </div>
    );
}

export default Skills;