import React, {useEffect} from "react";
import "./service2.css";
import  AOS  from "aos";
import "aos/dist/aos.css";
import "./response_service2.css";
import icon from "../../eats/img/Icon.png";
import icon2 from "../../eats/img/Icon2.png";
import iconDiv1 from "../../eats/img/Icon Div.png";
import iconDiv2 from "../../eats/img/Icon Div (1).png";
import iconDiv3 from "../../eats/img/Icon Div (2).png";
import iconDiv4 from "../../eats/img/Icon Div (3).png";
import iconDiv5 from "../../eats/img/Icon Div (4).png";
import iconDiv6 from "../../eats/img/Icon Div (5).png";
import shapes from "../../eats/img/Shapes.png";
import people1 from "../../eats/img/people5.png"
import people2 from "../../eats/img/people4.png"
import people3 from "../../eats/img/people3.png"
import people4 from "../../eats/img/people_2.png"
import people5 from "../../eats/img/people1.png"
export default function Service2(){
    useEffect(()=>{
        AOS.init();
    });
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
            <div className="service2">
                <div className="header" data-aos="fade-up">
                    <div className="sarlavha">
                        <p>Our Services</p>
                        <h1>We Build Software Solutionthat Solve Clients Business Challenges</h1>
                        <span>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</span>
                        <button type="button">Request A Quote <img src= {icon}/></button>
                    </div>
                    <div className="sarlavhaLink">
                        <ul>
                            <li>Technical support</li>
                            <li>Development <img src={icon2} /></li>
                            <li>AWS/Azure </li>
                            <li>Consulting</li>
                            <li>Information Technology</li>
                        </ul>
                    </div>
                </div>
                <div className="proces" data-aos="fade-down">
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
                <div className="boxer_box">
                    <div className="boxer_box_left boxer_box_text" data-aos="fade-right">
                        <p>Technical Support</p>
                        <h1>Best in class tech support for your company. We become your tech backbone</h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</span>
                    </div>
                    <div className="boxer_box_right" data-aos="fade-left">
                        <img src={people1} />
                    </div>
                </div>
                <div className="boxer_box">
                    <div className="boxer_box_left" data-aos="fade-up-right">
                        <img src={people2} />
                    </div>
                    <div className="boxer_box_right boxer_box_text" data-aos="fade-down-left">
                        <p>Developoment</p>
                        <h1>Bring your ideas to reality with certified team of developers, working with latest technologies </h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</span>
                    </div>
                </div>
                <div className="boxer_box">
                    <div className="boxer_box_left boxer_box_text" data-aos="fade-down-right">
                        <p>AWS/Azure</p>
                        <h1>We help you deploy, manage and secure your application on leading web services</h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</span>
                    </div>
                    <div className="boxer_box_right" data-aos="fade-up-left">
                        <img src={people3} />
                    </div> 
                </div> 
                <div className="boxer_box">
                    <div className="boxer_box_left" data-aos="fade-up-right">
                        <img src={people4}/>
                    </div>
                    <div className="boxer_box_right boxer_box_text" data-aos="fade-down-left">
                        <p>Consulting</p>
                        <h1>Get advice from world class professionals </h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</span>
                    </div>
                </div>
                <div className="boxer_box">
                    <div className="boxer_box_left boxer_box_text" data-aos="fade-down-right">
                        <p>Information Technology</p>
                        <h1>We want to get local identification in every corner of the world in this era of global citizenship.</h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</span>
                    </div>
                    <div className="boxer_box_right" data-aos="fade-up-left">
                        <img src={people5}/>
                    </div>
                </div>
            </div>
        </>
    )
}