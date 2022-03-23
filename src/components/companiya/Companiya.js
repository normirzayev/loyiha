import React, {useEffect} from "react";
import "./companiya.css";
import "./com_responsive.css";
import AOS from "aos";
import "aos/dist/aos.css";
import shapes from "../../eats/img/Shapes.png";
import birinchi from "..//../eats/img/Image 1.png";
import ikkinchi from "..//../eats/img/Image 2.png";
import uchinchi from "..//../eats/img/Image 3.png";
import loggo1 from "../../eats/img/compani/Logo.png"
import loggo2 from "../../eats/img/compani/Logo (1).png"
import loggo3 from "../../eats/img/compani/Logo (2).png"
import loggo4 from "../../eats/img/compani/Logo (3).png"
import loggo5 from "../../eats/img/compani/Logo (4).png"
import Group from "../../eats/img/Group 1710.png";
import raketa from "../../eats/img/Group 1749.png";
import react from "../../eats/img/Group 1755.png";
import diller from "../../eats/img/Group 1855.png";

import compani from "../../eats/img/compani/Image.png";
import team1 from "../../eats/img/compani/Team 1.png";
import team2 from "../../eats/img/compani/Team 2.png";
import team3 from "../../eats/img/compani/Team 3.png";
import team4 from "../../eats/img/compani/Team 4.png";
import team5 from "../../eats/img/compani/Team 5.png";
import team6 from "../../eats/img/compani/Team 6.png";
import team7 from "../../eats/img/compani/Team 7.png";
import team8 from "../../eats/img/compani/Team 8.png";
import twitter from "../../eats/img/compani/twitter.png";
import instagram from "../../eats/img/compani/instagram.png";
import linked from "../../eats/img/compani/linked.png";
export default function Companiya(){
    useEffect(() =>{
        AOS.init();
    }, [])
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
    return(
        <>
            <div className="companiya">
                <div className="companiya_header" data-aos="fade-up">
                    <div className="companiaLogo">
                        <div className="logo_left">
                            <span></span>
                            <p>Company</p>
                        </div>
                        <div className="logo_right">
                            <img src={shapes} />
                        </div>
                    </div>
                    <h1>Award-winning Company seen and used by millions around the world.</h1>
                    <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized.</span>
                    <div className="headerRasmlar">
                        <div className="box" data-aos="fade-right" data-aos-duration="1000">
                            <img src={birinchi} alt="" />
                        </div>
                        <div className="box" data-aos="fade-down" data-aos-duration="1400">
                            <img src={ikkinchi} alt="" />
                        </div>
                        <div className="box" data-aos="fade-left" data-aos-duration="1600" >
                            <img src={uchinchi} alt="" />
                        </div>
                    </div>
                </div>
                <div className="story">
                    <div className="story_left" data-aos="flip-left">
                        <div className="shakl"></div>
                        <p>Our Story 👇 </p>
                        <h1>From Startups to Titans of Industry</h1>
                        <span>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</span>   
                    </div>
                    <div className="story_right" data-aos="flip-down">
                        <div className="boxer">
                            <h2>1560+</h2>
                            <img src={Group}/>
                            <p>Project Delivered</p>
                        </div>
                        <div className="boxer">
                            <h2>100+</h2>
                            <img src={Group}/>
                            <p>Professional</p>
                        </div>
                        <div className="boxer">
                            <h2>950+</h2>
                            <img src={Group}/>
                            <p>Happy Client</p>
                        </div>
                        <div className="boxer">
                            <h2>10yrs</h2>
                            <img src={Group}/>
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
                <div className="companiya_logo" data-aos="fade-up">
                   <div className="logos">
                        <img src={loggo1} alt="" />
                        <img src={loggo2} alt="" />
                        <img src={loggo3} alt="" />
                        <img src={loggo4} alt="" />
                        <img src={loggo5} alt="" />
                   </div>
                </div> 
                <div className="expertise">
                    <div className="expertiseText" data-aos="fade-right"> 
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
                <div className="vision" data-aos="fade-down">
                    <p>OUR VISION</p>
                    <h1>We want to get local identification in every corner of the world in this era of global citizenship.</h1>
                    <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </span>
                    <img data-aos="fade-up" src={compani} />
                </div>
                <div className="team">
                    <p>MEET OUR TEAM</p>
                    <h1>Teamwork is the only way we work </h1>
                    <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</span>
                    <div className="team_rasmlar">
                        <div className="team_box" data-aos="flip-left" data-aso-duration="800">
                            <img src={team1} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>
                        <div className="team_box" data-aos="flip-left" data-aos-duration="1200">
                            <img src={team2} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                        <div className="team_box" data-aos="flip-left" data-aos-duration="1600">
                            <img src={team3} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                        <div className="team_box" data-aos="flip-left" data-aos-duration="2000">
                            <img src={team4} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                        <div className="team_box" data-aos="flip-left" data-aos-duration="2000">
                            <img src={team5} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                        <div className="team_box" data-aos="flip-left" data-aos-duration="1600">
                            <img src={team6} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                        <div className="team_box" data-aos="flip-left" data-aos-duration="1200">
                            <img src={team7} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>       
                        <div className="team_box" data-aos="flip-left" data-aos-duration="800">
                            <img src={team8} />
                            <div className="opacity">
                                <h2>Javena Melo</h2>
                                <p>Support Assist</p>
                                <div className="team_tarmoqlar">
                                    <img src={twitter} />
                                    <img src={instagram} />
                                    <img src={linked} />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
}