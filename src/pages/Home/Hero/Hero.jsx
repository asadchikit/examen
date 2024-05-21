import React from "react";
import "./hero.css";
import heroimg from "../../../assets/images/heroimg.png";

export const Hero = () => {
  return (
    <div>
      <div className="hero__left__right">
        <div className="hero__left">
          <div className="hero__left__tech">Tech Heim</div>
          <div className="hero__left__join">
            "Join the <span> digital revolution</span>"
          </div>
          <button className="hero__left__explore">Explore More</button>
        </div>
        <div className="hero__right">
          <img src={heroimg} alt="heroimg" />
        </div>
      </div>
    </div>
  );
};
