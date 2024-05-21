import React from "react";
import "./blogs.css";
import meta from "../../../assets/images/meta.png";
import naushnik from "../../../assets/images/naushnik.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const Blog = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="meta-main">
            <div className="meta-left">
              <div className="meta-card">
                <div className="meta-img">
                  <img src={meta} alt="" />
                </div>
              
                <h1>Meta Platforms plans to release free...</h1>
                <p>
                  The parent company of Facebook, Meta <br /> Platforms, is
                  introducing software to help...
                </p>
              </div>
            </div>
            <div className="meta-right">
              <div className="meta-right-main">
                <div className="meta-right-img">
                  <img src={naushnik} alt="" />
                </div>
                <div className="meta-titles">
                  <div className="meta-things">
                    8 Things You Probably Didn’t Know About Headphones
                  </div>
                  <p>
                    Owning a headphone could mean a different thing for
                    different people. For some, it <br /> act as a fashion
                    statement. It’s easy to spot these people, the headphone are
                    almo...
                  </p>

                  <div className="meta-months">
                    <div className="meta-monthone">
                      <div className="meta-month-logo">
                        <MdOutlineCalendarMonth />
                      </div>
                      <div className="meta-date">March , 28 , 2023</div>
                    </div>
                    <div className="meta-month2">
                      <MdOutlineFavoriteBorder />
                    </div>
                  </div>
                </div>
              </div>
              <div className="meta-right-main">
                <div className="meta-right-img">
                  <img src={naushnik} alt="" />
                </div>
                <div className="meta-titles">
                  <div className="meta-things">
                    8 Things You Probably Didn’t Know About Headphones
                  </div>
                  <p>
                    Owning a headphone could mean a different thing for
                    different people. For some, it <br /> act as a fashion
                    statement. It’s easy to spot these people, the headphone are
                    almo...
                  </p>

                  <div className="meta-months">
                    <div className="meta-monthone">
                      <div className="meta-month-logo">
                        <MdOutlineCalendarMonth />
                      </div>
                      <div className="meta-date">March , 28 , 2023</div>
                    </div>
                    <div className="meta-month2">
                      <MdOutlineFavoriteBorder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
