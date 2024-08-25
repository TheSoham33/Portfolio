import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import CV from "./Components/CV";
import Skills from "./Components/Skills/Skills";
import Form from "./Components/Form/Form";
import Error from "./Components/Error/Error";

function Top(){
    return(
        <>
            <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="/" element={<Navigate replace to="/Home" />} />
                <Route path="CV" element={<CV />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Form" element={<Form />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default Top;