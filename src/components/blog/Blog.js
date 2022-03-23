import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./blog.css";
import "./blog_respons.css";
import right from "../../eats/img/career/right.png";
import image from "../../eats/img/blog/Image.png";
import image1 from "../../eats/img/blog/Image (1).png";
import image2 from "../../eats/img/blog/Image (2).png";
import image3 from "../../eats/img/blog/Image (3).png";
import image4 from "../../eats/img/blog/Image (4).png";
import image5 from "../../eats/img/blog/Image (5).png";
import image6 from "../../eats/img/blog/Image (6).png";
import image7 from "../../eats/img/blog/Image (7).png";
import image8 from "../../eats/img/blog/Image (8).png";
import image9 from "../../eats/img/blog/Image (9).png";
import image10 from "../../eats/img/blog/Image (10).png";
import image11 from "../../eats/img/blog/Image (11).png";
import image12 from "../../eats/img/blog/Image (12).png";
import image13 from "../../eats/img/blog/Image (13).png";
export default function Blog(){
    useEffect(() => {
        AOS.init();
    },[])
    let resentData = [
        {
            img: image4,
            sarlavha: "Today's best design trends for digital products",
            profile: image,
            ism:"Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image5,
            sarlavha: "Today's best design trends for digital products",
            profile: image,
            ism:"Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image6,
            sarlavha: "Today's best design trends for digital products",
            profile: image,
            ism:"Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image7,
            sarlavha: "Today's best design trends for digital products",
            profile: image,
            ism:"Andrew Jonson",
            sana:"Jan 19, 2021",
        },     
    ]
    let postData = [
        {
            img: image8,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image9,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image10,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image11,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image12,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
        {
            img: image13,
            sarlavha: "We aim to attain the greatest satisfaction for our clients",
            text:"It is a long established fact that a reader will be distracted by the readable content of a page",
            profile:image,
            ism: "Andrew Jonson",
            sana:"Jan 19, 2021",
        },
    ]
    return(
        <>
            <div className="blog">
                <div className="trending">
                    <div className="trending_left" data-aos="fade-right">
                        <div className="shakl"></div>
                        <p>TRENDING</p>
                        <h1>Breaking the code How did we build our Figma plugin</h1>
                        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</span>
                        <a href="##">Read More <img src= {right} /> </a>
                        <div className="tren_profile">
                            <img src={image} />
                            <h4>Andrew Jonson</h4>
                            <span>Posted on 27th January 2021</span>
                        </div>
                        <img src= {image3} />
                    </div>
                    <div className="trending_right" data-aos="fade-left">
                        <div className="trending_right_box">
                            <h1>Great design expectations prejudice in digital products in Next Year</h1>
                            <div className="trending_right_profile">
                                <img src={image} />
                                <div className="name">
                                    <h4>Andrew Jonson</h4>
                                    <p>Jan 19, 2021</p>
                                </div>
                            </div>
                            <h1>Great design expectations prejudice in digital products in Next Year</h1>
                            <div className="trending_right_profile">
                                <img src={image1} />
                                <div className="name">
                                    <h4>Mathew Jasele</h4>
                                    <p>Jan 19, 2021</p>
                                </div>
                            </div>
                            <h1>Great design expectations prejudice in digital products in Next Year</h1>
                            <div className="trending_right_profile">
                                <img src={image2} />
                                <div className="name">
                                    <h4>Hussen Abakas</h4>
                                    <p>Jan 19, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="resentPost">
                    <h1>Read Recent Post</h1>
                    <div className="resentPost_box" >
                        {
                            resentData.map(item => (
                                <div className="resentPost_boxer" data-aos="flip-up">
                                    <img src={item.img} />
                                    <div className="boxer_text">
                                        <h1>{item.sarlavha}</h1>
                                        <div className="boxer_profile">
                                            <img src={item.profile} />
                                            <div className="name">
                                                <h4>{item.ism}</h4>
                                                <p>{item.sana}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="allPost">
                    <div className="allPost_container">
                        <h1>All posts</h1>
                        <div className="allPost_box">
                            {
                                postData.map(item => (
                                    <div className="allPost_boxer" data-aos="flip-left">
                                        <img src={item.img} />
                                        <div className="post_boxer_text">
                                            <h1>{item.sarlavha}</h1>
                                            <p>{item.text}</p>
                                            <div className="boxer_profile">
                                                <img src={item.profile}/>
                                                <div className="name">
                                                    <h4>{item.ism}</h4>
                                                    <p>{item.sana}</p>
                                                </div>
                                            </div>
                                        </div>
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