import React from "react";
import "./blog.css";
import meta from "../../assets/images/meta.png";
import date from "../../assets/images/date & time.png";
import naushnik from "../../assets/images/naushnik.png";
import { MdOutlineCalendarMonth, MdOutlineFavoriteBorder, } from "react-icons/md";
import video from "../../assets/images/Videos card.png";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <div className="container">
        <div className="blogmeta_main">
          <div className="blogmeta_left">
            <div className="blogmeta_cards">
              <div className="blogmeta_cardf">
                <div className="blogmeta_card">
                  <div className="blogmeta_card_img">
                    <img src={meta} alt="" />{" "}
                  </div>
                  <div className="ag">
                    <img src={date} alt="" />
                  </div>
                  <h1>Meta Platforms plans to release free...</h1>
                  <p>
                    The parent company of Facebook, Meta
                    <br /> Platforms, is
                    introducing software to help...
                  </p>
                </div>
                <div className="blogmeta_card">
                  <div className="blogmeta_card_img">
                    <img src={meta} alt="" />{" "}
                  </div>
                  <div className="ag">
                    <img src={date} alt="" />
                  </div>
                  <h1>Meta Platforms plans to release free...</h1>
                  <p>
                    The parent company of Facebook, Meta
                    <br /> Platforms, is
                    introducing software to help...
                  </p>
                </div>
              </div>

              <div className="blogmeta_cardf">
                <div className="blogmeta_card">
                  <div className="blogmeta_card_img">
                    <img src={meta} alt="" />{" "}
                  </div>
                  <div className="ag">
                    <img src={date} alt="" />
                  </div>
                  <h1>Meta Platforms plans to release free...</h1>
                  <p>
                    The parent company of Facebook, Meta
                    <br /> Platforms, is
                    introducing software to help...
                  </p>
                </div>
                <div className="blogmeta_card">
                  <div className="blogmeta_card_img">
                    <img src={meta} alt="" />{" "}
                  </div>
                  <div className="ag">
                    <img src={date} alt="" />
                  </div>
                  <h1>Meta Platforms plans to release free...</h1>
                  <p>
                    The parent company of Facebook, Meta
                    <br /> Platforms, is
                    introducing software to help...
                  </p>
                </div>
              </div>

              <div className="blogmeta_posts">Recent posts</div>

              <div className="blogmeta_images">
                <div className="blogmeta_right_main">
                  <Link to="/headphone">
                    <div className="blogmeta_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blogmeta_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it
                      <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
                    </p>

                    <div className="kalen">
                      <div className="months_days">
                        <MdOutlineCalendarMonth className="MdOutlineCalendarMonth" />
                        <div className="monthsdate">March , 28 , 2023</div>
                      </div>
                      <div className="month2">
                        <MdOutlineFavoriteBorder />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blogmeta_right_main">
                  <Link to="/headphone">
                    <div className="blogmeta_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blogmeta_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it
                      <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
                    </p>

                    <div className="kalen">
                      <div className="months_days">
                        <MdOutlineCalendarMonth className="MdOutlineCalendarMonth" />
                        <div className="monthsdate">March , 28 , 2023</div>
                      </div>
                      <div className="month2">
                        <MdOutlineFavoriteBorder />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="blogmeta_right_main">
                  <Link to="/headphone">
                    <div className="blogmeta_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blogmeta_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it
                      <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
                    </p>

                    <div className="kalen">
                      <div className="months_days">
                        <MdOutlineCalendarMonth className="MdOutlineCalendarMonth" />
                        <div className="monthsdate">March , 28 , 2023</div>
                      </div>
                      <div className="month2">
                        <MdOutlineFavoriteBorder />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blogmeta_right_main">
                  <Link to="/headphone">
                    <div className="blogmeta_right_img">
                      <img src={naushnik} alt="" />
                    </div>
                  </Link>
                  <div className="blogmeta_titles">
                    <div className="things">
                      8 Things You Probably Didn’t Know About Headphones
                    </div>
                    <p>
                      Owning a headphone could mean a different thing for
                      different people. For some, it
                      <br /> act as a fashion
                      statement. It’s easy to spot these people, the headphone
                      are almo...
                    </p>

                    <div className="kalen">
                      <div className="months_days">
                        <MdOutlineCalendarMonth className="MdOutlineCalendarMonth" />
                        <div className="monthsdate">March , 28 , 2023</div>
                      </div>
                      <div className="month2">
                        <MdOutlineFavoriteBorder />
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>


          <div className="blogmeta_main_img">
            <h1>Videos</h1>
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>{" "}
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>
            <div className="blogmeta_vidyo_img ">
              <img src={video} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
