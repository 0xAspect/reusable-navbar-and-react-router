import React, {useState} from 'react';
import styles from "./navbar.scss";
import { FaBars } from 'react-icons/fa';
import { HiCubeTransparent as HiCube } from 'react-icons/hi';
import {GrTwitter, GrGithub} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(true)
    setTimeout(()=> setExpand(false), 100)
  }
  const handleClose = () => {

  
  }
  console.log(expand)

  return (
    <>
      <nav class="nav">
        
        <div class='nav-link-title'>0xAspect <HiCube className="icon" /></div>
        <div class="nav-menu">
          <NavLink className="nav-link" to="/">About Me</NavLink>
          <NavLink className="nav-link" to="/projects">Projects</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <a href= "https://github.com/0xAspect"class='nav-link-external'><GrGithub className="icon-external"/></a>
          <a href="https://twitter.com/Aspect0x" class='nav-link-external'><GrTwitter className="icon-external"/></a>
        </div>
        <div class ="bars" onClick={handleClick}><FaBars className='burger-menu' /></div>
        
      </nav>
      <Sidebar expand={expand}></Sidebar> 
    </>
  );
};

export default Navbar;