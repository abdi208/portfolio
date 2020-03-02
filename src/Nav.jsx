import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    scrollToTop = () => {
    scroll.scrollToTop();
    };

    render() {
    return (
        <nav  className="nav" id="navbar">
        <div className="nav-content">
            <h1 style={{fontStyle: 'bold', fontSize:'20px'}}>Abdi Ahmed</h1>
            <ul style={{margin: '0 auto'}} className="nav-items">
            <li className="nav-item">
                <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Projects
                </Link>
            </li>
            <li className="nav-item">
                <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Skills
                </Link>
            </li>
            <li className="nav-item">
                <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Contact Me
                </Link>
            </li>
            <li className="nav-item">
            
                <a style={{color: 'black'}} rel="noopener noreferrer" href="https://drive.google.com/file/d/1Az0qZTd1oAUEMDIEpk1MZmRhOVWSBQ0W/view?usp=sharing" target="_blank" >Resume</a>
            </li>

            </ul>
        </div>
        </nav>
    );
    }
}