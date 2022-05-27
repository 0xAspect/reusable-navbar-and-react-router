import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/index.js";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const ReactRouter =()=>{
return (
<>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />\
        <Route exact path="/projects" element={<Projects/>} />\
        <Route exact path="/contact" element={<Contact/>} />\
    </Routes>
</>
);}
export default ReactRouter;