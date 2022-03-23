import React, { useState} from "react";
import "./container.css";
import icon from "../eats/img/Icon.png";
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Service from "../components/service/Service";
import Footer from "./footer/Footer";
import Service2 from "../components/service2/Service2";
import Companiya from "../components/companiya/Companiya";
import Career from "../components/Career/Career";
import Blog from "../components/blog/Blog";
import { Project } from "../components/project_clone/Project";
export default function Container(){
    const [menu, setMenu] = useState(false);
    function menuTogle(){
        setMenu(!menu)
    }
    return( 
        <>
            <Router>
                <div className={menu ? "container actives" : "container"}>
                    <div className="navbar">
                        <div className="logo">
                           <Link to="/"> <h1>finsweet</h1> </Link>
                        </div>
                        <div className="menu" onClick={menuTogle}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className= {menu ? "navlink active" : "navlink "}>
                            <ul>
                                <li>
                                    <NavLink to="/" activeclassname="selected" onClick={menuTogle}> Home </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/service" onClick={menuTogle}> Service </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/copmaniya" onClick={menuTogle}> Company </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Career" onClick={menuTogle}> Career </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" onClick={menuTogle}> Blog </NavLink>
                                </li>
                                <li>
                                    <NavLink className="clone" to="clone_Project" onClick={menuTogle}> Clone project <img src={icon} /> </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="section">
                        <Routes>
                            <Route path="/" element={< Service />} />
                            <Route path="/service" element={ <Service2 />} />
                            <Route path="/copmaniya" element= { <Companiya />} />
                            <Route path="/career" element={ <Career />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/clone_Project" element={<Project />} />
                        </Routes>
                    </div>
                    <div className="footerContainer">
                        <Footer />
                    </div>
                </div>
            </Router>
        </>
    )
}