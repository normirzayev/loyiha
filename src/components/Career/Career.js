import React, {useEffect} from "react";
import "./Career.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./career_respons.css";
import shapes from "../../eats/img/Shapes.png";
import right from "../../eats/img/career/right.png";
import cultureIcon from "../../eats/img/career/CultureIcon.png"; 
import cultureIcon1 from "../../eats/img/career/CultureIcon(1).png"; 
import cultureIcon2 from "../../eats/img/career/CultureIcon(2).png"; 
import cultureIcon3 from "../../eats/img/career/CultureIcon(3).png"; 
import cultureIcon4 from "../../eats/img/career/CultureIcon(4).png"; 
import cultureIcon5 from "../../eats/img/career/CultureIcon(5).png"; 
export default function Career(){
    useEffect(() => {
        AOS.init();
    })
    let technoData = [
        {
            sarlavha: "Full Stack Developer",
            text1: "Bengaluru · Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Testing Engineer",
            text1: "Remote · Full Time",
            text2: "$08K - $10K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Hr Manager",
            text1: "Bengaluru · Full Time",
            text2: "$08K - $10K · 4 to 5 Yrs Exp",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Product Designer",
            text1: "Mumbai . Fultime",
            text2: "$08K - $10K · 4 to 5 Yrs Exp",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Wordpress Developer",
            text1: "Mumbai, Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Jr. QA Tester",
            text1: "California, USA . Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Full Stack Developer",
            text1: "Bengaluru · Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Full Stack Developer",
            text1: "Bengaluru · Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },
        {
            sarlavha: "Full Stack Developer",
            text1: "Bengaluru · Full Time",
            text2: "$10K - $18K · No equity",
            silka: "Apply Now",
            img: right
        },   
    ];
    let cultureData = [
        {
            img:cultureIcon,
            sarlavha: "Covid-19 insurance",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        {
            img:cultureIcon1,
            sarlavha: "Flexible working time",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        {
            img:cultureIcon2,
            sarlavha: "Work from home",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        {
            img:cultureIcon3,
            sarlavha: "Annual retreats",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        {
            img:cultureIcon4,
            sarlavha: "Learning stipend",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        {
            img:cultureIcon5,
            sarlavha: "Gym membership",
            text:"Through True Rich Attended does no end it his mother since real had halfdoes no end it"
        },
        
    ]
    return(
        <>
            <div className="career">
                <div className="careerHeader" data-aos="fade-up">
                    <div className="careerLogo">
                        <div></div>
                        <p>CAREER AT FINSWEET</p>
                        <img src= {shapes} />
                    </div> 
                    <div className="careersRasm">
                        <h2>We hired people who are Always Passionate about what they do</h2>
                        <p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw .</p>
                        <h1 data-aos="fade-right">Careers</h1>
                    </div>
                    <p>See Our open positions </p>
                    <p>👇</p>
                </div>
                <div className="technologyAbout">
                    <div className="tehcnology_box">
                        {
                            technoData.map(item => (
                                <div className="tehcnology_boxer" data-aos="flip-up">
                                    <h2>{item.sarlavha}</h2>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                    <a href="##" > {item.silka} <img src= {item.img} /> </a>
                                </div>        
                            ))
                        }
                    </div>
                </div>
                <div className="culture" data-aos="fade-down">
                    <div className="culture_container">
                        <p>OUR WORK & CULTURE</p>
                        <h1>Come and join a team of highly skilled professionals.</h1>
                        <span>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </span>
                        <div className="culture_box">
                            {
                                cultureData.map(item => (
                                    <div className="culture_boxer" data-aos="flip-left">
                                        <img src= {item.img} />
                                        <h3>{item.sarlavha}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}