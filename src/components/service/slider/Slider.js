import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import logoImp from "../../../eats/img/Logoimp.png";
import men3 from "../../../eats/img/men3.png";
import men2 from "../../../eats/img/men2.png";
import men1 from "../../../eats/img/men1.png";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div className="Slider2">
        <Slider {...settings}>
          <div>
            <div className="box">
                <div className="quti">
                    <h1>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h1>
                    <div className="sliderProfile">
                        <img src={men3} />
                        <div className="name">
                            <h4>Johnny Andro</h4>
                            <p>Director, Company</p>
                        </div>
                        <img id="logo" src={logoImp} />
                    </div>
                </div>
            </div>
          </div>
          
          <div>
            <div className="box">
                <div className="quti">
                    <h1>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h1>
                    <div className="sliderProfile">
                        <img src={men2} />
                        <div className="name">
                            <h4>Johnny Andro</h4>
                            <p>Director, Company</p>
                        </div>
                        <img id="logo" src={logoImp} />
                    </div>
                </div>
            </div>
          </div>
          <div>
            <div className="box">
                <div className="quti">
                    <h1>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</h1>
                    <div className="sliderProfile">
                        <img src={men1} />
                        <div className="name">
                            <h4>Johnny Andro</h4>
                            <p>Director, Company</p>
                        </div>
                        <img id="logo" src={logoImp} />
                    </div>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}