import React from "react";
import "./seriesih.css"; // Предполагаю, что здесь находятся стили компонента
import iphone from "../../../assets/images/iphones.png";
import ps5 from "../../../assets/images/ps53.png"

export const Advertising = () => {
  return (
    <section>
     <div className="container">
  <div className="series-left-right">
    <div className="series-section">
      <div className="series-section-left">
        <div className="series-iphone">
          Iphone <span className="series-ip"> 15 Series</span>
        </div>
        <div className="series-iphones">
          <img src={iphone} alt="" />
        </div>
      </div>
      <div className="series-section-right">
        <div className="series-blocks">
          <div className="series-block">
            <div className="series-number1">8</div>
            <div className="series-number2">Days</div>
          </div>
          <div className="series-block">
            <div className="series-number1">8</div>
            <div className="series-number2">Days</div>
          </div>
          <div className="series-block">
            <div className="series-number1">8</div>
            <div className="series-number2">Days</div>
          </div>
          <div className="series-block">
            <div className="series-number1">8</div>
            <div className="series-number2">Days</div>
          </div>
        </div>
        <div className="series-feel-start">
          <div className="series-feel">It feels good to be the first </div>
          <p className="series-text">
            Get ready for the future of <br /> smartphones.Experience <br />{" "}
            innovation like never before. Stay <br /> tuned for the big
            iPhone 15 <br /> pre-sale.
          </p>
          <button className="series-btn">Register Now</button>
        </div>
      </div>
    </div>
    <div className="series-right">
      <h1 className="series-right-h1">Play Station 5</h1>
      <div className="series-right-ps5">
        <h1 className="series-right-digital">Digital Edition + 2TB</h1>
        <img src={ps5} alt="" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
};
