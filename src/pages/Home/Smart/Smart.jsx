import React from "react";
import "./smart.css";
import soat from "../../../assets/images/soat.png"

export const Smart = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="smart-watch-sect">
            <div className="smart-watch-main">
              <div className="smart-watch-left">
                <div className="smart-watch-title">SMART WATCH</div>
                <p>Various designs and brands</p>
                <button className="smart-watch-btn">view</button>
              </div>
              <div className="smart-watch-right">
                <div className="smart-watch-img">
                  <img src={soat} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
