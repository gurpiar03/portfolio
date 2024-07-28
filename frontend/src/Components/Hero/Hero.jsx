import React from "react";
import "./Hero.css";
import profile_img from "../../assets/gurpiar_img1.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Gurpiar Singh,</span> fullstack developer based in UK.
      </h1>
      <p>
        I am a web developer from Leeds, UK with 1 years of experience in
        multiple technologies like html, CSS and javascript.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
