import React,  { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { auto } from "@popperjs/core";

function GreetingImage() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    `${process.env.PUBLIC_URL}/assests/images/gamer_traveller_fun_lover.png`,
    `${process.env.PUBLIC_URL}/assests/images/guy_playing_video_games.png`,
    `${process.env.PUBLIC_URL}/assests/images/gamer_traveller_fun_lover_1.png`,
    `${process.env.PUBLIC_URL}/assests/images/gamer_traveller_fun_lover_2.png`
  ];

  function getCurrentImage() {
    return currentImage === 1 ? currentImage + 1 : currentImage;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((getCurrentImage() + 1) % images.length);
    }, 5000); // 5s
    return () => clearInterval(intervalId);
  }, [getCurrentImage(), images.length]);

  return (
    <div className="greeting-image-div">
      {images.map((image, index) => (
        <img
          key={index}
          className={`greeting-image ${index === getCurrentImage() ? 'current' : ''}`}
          src={image}
          alt="greeting"
        />
      ))}
    </div>
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            {/* <FeelingProud theme={theme} /> */}
            {/* <img src={`${process.env.PUBLIC_URL}/assests/images/gamer_traveller_fun_lover.png`} alt='gamer_traveller_fun_lover.png'/> */}
            <GreetingImage theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
