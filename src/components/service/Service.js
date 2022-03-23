import React, {useEffect} from "react";
import "./service.css";
import "aos/dist/aos.css";
import AOS from "aos";
import icon from "../../eats/img/Icon.png";
import icon2 from "../../eats/img/Icon2.png";
import Image from "../../eats/img/Image.png";
import Logo from "../../eats/img/Logo.png";
import Union from "../../eats/img/LogoBrend.png";
import Logos from "../../eats/img/Logos.png";
import Logo2 from "../../eats/img/Logo (1).png";
import Logo3 from "../../eats/img/Logo (2).png";
import birinchi from "..//../eats/img/Image 1.png";
import ikkinchi from "..//../eats/img/Image 2.png";
import uchinchi from "..//../eats/img/Image 3.png";
import Group from "../../eats/img/Group 1710.png";

import raketa from "../../eats/img/Group 1749.png";
import react from "../../eats/img/Group 1755.png";
import diller from "../../eats/img/Group 1855.png";
import naushnik from "../../eats/img/naushnik.png";
import html from "../../eats/img/html.png";

import iconDiv1 from "../../eats/img/Icon Div.png"
import iconDiv2 from "../../eats/img/Icon Div (1).png"
import iconDiv3 from "../../eats/img/Icon Div (2).png"
import iconDiv4 from "../../eats/img/Icon Div (3).png"
import iconDiv5 from "../../eats/img/Icon Div (4).png"
import iconDiv6 from "../../eats/img/Icon Div (5).png"
import shapes from "../../eats/img/Shapes.png";
import men1 from "../../eats/img/men1.png";
import men2 from "../../eats/img/men2.png";
import men3 from "../../eats/img/men3.png";
import Slider from "./slider/Slider";
import people from "../../eats/img/people.png";
import people2 from "../../eats/img/people2.png";
import "./responcive.css";
import Aos from "aos";
export default function Service(){
    useEffect(() => {
        Aos.init();
    },[]);

    let expertisData = [
        {
            img: raketa,
            sarlavha: "On Time Delivery",
            text: 'Through True Rich Attended does no end it his mother since real had half every him.',
        },
        {
            img: react,
            sarlavha: "On Time Delivery",
            text: 'Through True Rich Attended does no end it his mother since real had half every him.',
        },
        {
            img: diller,
            sarlavha: "On Time Delivery",
            text: 'Through True Rich Attended does no end it his mother since real had half every him.',
        },
        
    ];
    let serviData = [
        {
            img1: naushnik,
            sarlavha: "Technical support",
            text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            span:"read More",
            img2: icon2,
        },
        {
            img1: react,
            sarlavha: "Technical support",
            text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            span:"read More",
            img2: icon2,
        },
        {
            img1: html,
            sarlavha: "Technical support",
            text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
            span:"Read more",
            img2: icon2,
        },

    ];
    let procesData = [
        {
            span: "01",
            img:iconDiv1,
            sarlavha:"Discover",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            span: "02",
            img:iconDiv2,
            sarlavha:"Development",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            span: "03",
            img:iconDiv3,
            sarlavha:"Testing",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            span: "04",
            img:iconDiv4,
            sarlavha:"Deployment",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            span: "05",
            img:iconDiv5,
            sarlavha:"Maintenance",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            span: "06",
            img:iconDiv6,
            sarlavha:"Designing",
            text:"We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        }
    ]
    return(
        <>
            <div className="service">
                <div className="serviceHeader">
                    <div className="kirish" data-aos="fade-down"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <div className="kirishText">
                            <h1>Transform Your Idea Into Reality with Finsweet</h1>
                            <p>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                            <div className="kirishTugma">
                                Request Quote <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className="kirishRasm">
                            <img src={Image} alt="" />
                        </div>
                    </div>
                    <div className="kirishFooter">
                        <div className="kirishRasmlar">
                            <p><span> Our Clients <br /> </span> We've Worked with </p>
                            <img src={Union} alt="" />
                            <img src={Logo} alt="" />
                            <img src={Logos} alt="" />
                            <img src={Logo2} alt="" />
                            <img src={Logo3} alt="" />
                        </div>
                    </div>
                </div>

                <div className="about" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <p>ABOUT US</p>
                    <div className="malumotlar">
                        <div className="ong">
                            <h1>The company leads entire webdesign process from concept to delivery.</h1>
                        </div>
                        <div className="chap">
                            <h1>The Era Of Technology.</h1>
                            <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="box" data-aos="fade-left" data-aos-delay="200">
                            <img src={birinchi} alt="" />
                        </div>
                        <div className="box" data-aos="fade-down" data-aos-delay="400">
                            <img src={ikkinchi} alt="" />
                        </div>
                        <div className="box" data-aos="fade-right" data-aos-delay="600">
                            <img src={uchinchi} alt="" />
                        </div>
                    </div>
                    <div className="aboutFooter">
                        <div className="statis">
                            <div className="boxer" data-aos="flip-left">
                                <h2>1560+</h2>
                                <img src={Group}/>
                                <p>Project Delivered</p>
                            </div>
                            <div className="boxer" data-aos="flip-down">
                                <h2>100+</h2>
                                <img src={Group}/>
                                <p>Professional</p>
                            </div>
                            <div className="boxer" data-aos="flip-up">
                                <h2>950+</h2>
                                <img src={Group}/>
                                <p>Happy Client</p>
                            </div>
                            <div className="boxer" data-aos="flip-left">
                                <h2>10yrs</h2>
                                <img src={Group}/>
                                <p>Experience</p>
                            </div>
                        </div>
                        <div className="readMore" data-aos="fade-left" data-aos-easing="linear">
                            <p>Read about us <img src={icon2} alt="" /></p>
                        </div>
                    </div>
                </div>
                <div className="expertise" data-aos="fade-up" data-aos-easing="linear">
                    <div className="expertiseText">
                        <p>Our expertise</p>
                        <h2>We want to get local identification in every corner of the world in this era of global citizenship</h2>
                        <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                    </div>
                    <div className="expertiseBox">
                        {
                            expertisData.map(item => (
                                <div className="expertiseBoxer" data-aos="flip-right" data-aos-easing="linear"data-aos-duration="600">
                                    <div className="expertisRasm">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="boxerText">
                                        <h5>{item.sarlavha}</h5>
                                        <p>{item.text}</p>                                         
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="ourServices" data-aos="fade-right" data-aos-easing="linear">
                    <p>Our Services</p>
                    <h1>We build software solutions that solve client's business challenges</h1>
                    <div className="kirishTugma">
                        Request Quote <img src={icon} alt="" />
                    </div>
                    <div className="servicesBoxer">
                        {
                            serviData.map(item => (
                                <div className="boxerServic" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="600">
                                    <img src={item.img1} alt="rasm" />
                                    <h4>{item.sarlavha}</h4>
                                    <p>{item.text}</p>
                                    <span>{item.span} <img src={item.img2} /></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="proces" data-aos="zoom-in" data-aos-easing="ease">
                    <div className="procesNav">
                        <p>Our Process</p>
                        <img src={shapes} />
                    </div>
                    <div className="procesText">
                        <h1>The process we are working <br /> With Our client Worldwide</h1>
                        <p>Through True Rich Attended does no end it his mother since real had half every <br /> him case in packages enquire we up ecstatic unsatiable.</p>
                    </div>
                    <div className="procesBox">
                        {
                            procesData.map(item => (
                                <div className="procesBoxer" data-aos="flip-left" data-aos-easing="ease-in-back">
                                    <span>{item.span}</span>
                                    <div className="proxesImg">
                                        <img src={item.img} />
                                    </div>
                                    <div className="procesAbout">
                                        <h1>{item.sarlavha}</h1>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="costumers" data-aos="fade-down">
                    <div className="left">
                        <h1>Our customers love <br /> what we do</h1>
                        <h4>Transform your idea into reality with finsweet</h4>
                        <p>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. </p>
                        <div className="costumersRasm">
                            <img src={men3}/>
                            <img src={men2}/>
                            <img src={men1}/>
                        </div>
                        <p><span>30+</span> Customer Reviews</p>
                    </div>
                    <div className="right" data-aos="fade-left" fade-aos-easing="ease-in-out">
                        <Slider />
                    </div>
                </div>
                <div className="readNews" data-aos="fade-down">
                    <h1>Read our latest blogs & news</h1>
                    <div className="readMore">
                        <div className="readBoxer" data-aos="fade-down-right" data-aos-duration="600">
                            <img src={people} alt="" />
                            <div className="boxerText">
                                <p>Jan 19, 2021</p>
                                <h1>Today's best design trends for digital products</h1>
                                <span>Read More <img src={icon2} /> </span>
                            </div>
                        </div>
                        <div className="readBoxer" data-aos="fade-up-left" data-aos-duration="1000">
                            <img src={people2} alt="" />
                            <div className="boxerText">
                                <p>Jan 19, 2021</p>
                                <h1>A practical guide to building a brand strategy</h1>
                                <span>Read More <img src={icon2} /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}