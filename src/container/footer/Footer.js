import React,{useEffect} from "react";
import "./footer.css";
import "aos/dist/aos.css";
import AOS  from "aos";
import icon2 from "../../eats/img/Icon2.png";
import facebook from "../../eats/img/facebook.png";
import twitter from "../../eats/img/twitter.png";
import instagram from "../../eats/img/instagram.png";
import inner from "../../eats/img/inner.png";
export default function Footer(){
    useEffect(() =>{
        AOS.init();
    })
    return(
        <>
            <div className="footer-container">
                <div className="footer" data-aos="fade-up">
                    <form action="#">
                        <div className="formText">
                            <p>NEWSLETTER</p>
                            <h1>Subscribe our News Letter <br /> to get Latest Updates.</h1>
                        </div>
                        <div className="formTugma">
                            <input type="email" placeholder="Paresh@Pixeto.com"/>
                            <button type="button">Jo'natish </button>
                        </div>
                    </form>
                    <div className="special">
                        <div className="specialtext" data-aos="fade-left" data-aos-duration="800">
                            <h1>Let's make <br /> something special</h1>
                            <h4>Let's talk! 🤙 </h4>
                            <p>020 7993 2905</p>
                            <span>hi@finsweet.com</span>
                        </div>
                        <div className="specialLink" data-aos="fade-left" data-aos-duration="1000">
                            <ul>
                                <li>Home</li>
                                <li>Service</li>
                                <li>Company</li>
                                <li>Career </li>
                                <li>News</li>
                            </ul>
                        </div>
                        <div className="specialLink" data-aos="fade-left" data-aos-duration="13000">
                            <ul>
                                <li>Service</li>
                                <li>Technical support</li>
                                <li>Development</li>
                                <li>AWS/Azure  </li>
                                <li>Consulting</li>
                                <li>Information Technology</li>
                            </ul>
                        </div>
                        <div className="specialLink" data-aos="fade-left" data-aos-duration="1500">
                            <ul>
                                <li>Resourses</li>
                                <li>About Us</li>
                                <li>Testimonial</li>
                                <li>Privacy Policy </li>
                                <li>Terms of use</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div className="contactUS" data-aos="zoom-in-out">
                        <p>DLF Cybercity, Bhubaneswar, India, &52050</p>
                        <button>Contact Us <img src={icon2} /></button>
                    </div>
                </div>
                <div className="footerQism">
                    <div className="logo">
                        <h1>finsweet</h1>
                        <p> ©2021 Finsweet </p>
                    </div>
                    <div className="footerTaqrmoq">
                        <img src={facebook} />
                        <img src={twitter} />
                        <img src={instagram} />
                        <img src={inner} />
                    </div>
                </div>
            </div>
        </>
    )
}