import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Home.css";

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <a className="logodec" href="./Home">
                <div className="navlogo">
                    Hola!
                </div>
            </a>
            <div className="display-menu">
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "#FEF3C7" : "#444",
                })} 
                className="menu" to={"/Home"}>Home</NavLink>

                <NavLink style={({ isActive }) => ({
                    color: isActive ? "#FEF3C7" : "#444",
                })} 
                className="menu" to={"/CV"}>Resume</NavLink>

                <NavLink style={({ isActive }) => ({
                    color: isActive? "#FEF3C7" : "#444",
                })}
                className="menu" to={"/Skills"}>Skills</NavLink>

                <NavLink style={({ isActive }) => ({
                    color: isActive? "#FEF3C7" : "#444",
                })}
                className="menu" to={"/Form"}>Contact Me</NavLink>

                    <div className="display-menu">
                        <DarkMode />
                    </div>
                    
                </div>

                <div className="display-menu">
                <img src= "https://static.thenounproject.com/png/479726-200.png" alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
                </div>
                
                <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>

                    

                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#FEF3C7" : "#444",
                    })} 
                    className="mobileMenu" to={"/Home"} onClick={() => setShowMenu(false)}>Home</NavLink>

                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#FEF3C7" : "#444",
                    })} 
                    className="mobileMenu" to={"/CV"} onClick={() => setShowMenu(false)}>Resume</NavLink>

                    <NavLink style={({ isActive }) => ({
                        color: isActive? "#FEF3C7" : "#444",
                    })}
                    className="mobileMenu" to={"/Skills"} onClick={() => setShowMenu(false)}>Skills</NavLink>

                    <NavLink style={({ isActive }) => ({
                        color: isActive? "#FEF3C7" : "#444",
                    })}
                    className="mobileMenu" to={"/Form"} onClick={() => setShowMenu(false)}>Contact Me</NavLink>
                </div>

        </header>
    )
} 

export default Nav;