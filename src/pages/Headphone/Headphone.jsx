import React, { useState } from 'react';
import "./headphone.css";
import naushnuk2 from "../../assets/images/naushnik2.png";
import air from "../../assets/images/airpods.png";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineDislike } from "react-icons/ai";

import { FaRegPenToSquare } from "react-icons/fa6";


export const Headphone = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };

  const handleIncrement3 = () => {
    setCount3(count3 + 1);
  };


  const handleIncrement4 = () => {
    setCount4(count4 + 1);
  };


  const handleIncrement5 = () => {
    setCount5(count5 + 1);
  };


  const handleIncrement6 = () => {
    setCount6(count6 + 1);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="should_main">
            <div className="should_left">
              <div className="should_left_bi">
                <div className="should_title">
                  5 Things You Probably Didn’t Know About Headphones
                </div>
                <div className="should_date">By Geaorge Larens on March , 28 , 2023</div>
                <div className="should_image">
                  <img src={naushnuk2} alt="Headphones" />
                </div>
                <div className="should_content">
                  Headphones have become an integral part of our daily lives,
                  allowing us to enjoy <br /> music, podcasts, and calls with
                  convenience and privacy. While most of us are familiar <br />{" "}
                  with their basic functions, there are several intriguing facts
                  about headphones that <br /> might surprise you. In this
                  article, we'll delve into eight things you probably didn't{" "}
                  <br /> know about headphones, shedding light on their history,
                  technology, and unique <br /> features. <br />
                  <br /> <span>1-Stereo Sound Perception</span> <br /> Ever
                  wondered how headphones manage to create a three-dimensional
                  sound <br />
                  experience? This phenomenon is called binaural perception, which
                  utilizes the slight <br /> time differences it takes for sound
                  to reach each ear, thus tricking the brain into <br />{" "}
                  perceiving depth and direction in audio. <br /> <br />{" "}
                  <span>2-Noise-Canceling Magic</span> <br /> Noise-canceling
                  headphones use a sophisticated technology that analyzes external{" "}
                  <br />
                  sounds and emits an "anti-noise" signal to counteract them. This
                  process results in the <br /> suppression of unwanted background
                  noise, offering a peaceful listening experience <br /> even in
                  bustling environments. <br /> <br />
                  <span>3-Bone Conduction Technology</span> Some headphones,
                  particularly designed for sports and outdoor activities,
                  <br /> employ bone conduction technology. Instead of covering or
                  inserting into the ears, these <br /> headphones sit on your
                  cheekbones and transmit sound vibrations through your <br />{" "}
                  bones directly to the inner ear, leaving your ears open to hear
                  ambient sounds. <br /> <br />
                  <span>4-Virtual Surround Sound</span> High-end headphones offer
                  virtual surround sound, which simulates a multi-speaker <br />{" "}
                  setup for a cinema-like experience. This is achieved by using
                  advanced algorithms to <br /> manipulate audio signals, creating
                  the illusion that sound is coming from various <br />{" "}
                  directions. <br /> <br /> <span>5-Wired vs. Wireless</span>{" "}
                  <br />
                  While wireless headphones are incredibly convenient, wired
                  headphones can still offer <br /> superior audio quality due to
                  the lack of data compression and transmission loss <br />{" "}
                  associated with wireless technology.
                  <br />


                </div>

                <div className="should_content_comet">
                  <button className="should_comet_btn">
                    <FaRegPenToSquare className="FaRegPenToSquare" />3 Comment</button>
                  <button className="should_comet_btn">
                    <AiOutlineLike className="FaRegPenToSquare" />3 Comment</button>
                </div>
              </div>




              <div className="should_left_comet">
                <h1>Comments</h1>

                <div className="should_comets_anna">
                  <div className="should_anna">
                    <FaRegUserCircle className="FaRegUserCircle" />
                    <ul >
                      <li className="anna_ley">Anna_Ley</li>
                      <li className="march_anna">March 30, 2023</li>
                    </ul>
                    <div className="should_coment_price">
                      <FaStar />
                      4.6
                    </div>
                  </div>

                  <p>This article deepened my appreciation for headphones as not only devices of entertainment but also as <br />
                    a blend of science and innovation that enrich our auditory experiences.</p>
                  <div className="show_btn">
                    <button className="show_More"> Show More<IoChevronDownOutline /></button>
                  </div>

                  <div className="comet_like">
                    <button className='should_coment_like' onClick={handleIncrement1}> <AiOutlineLike className="FaRegPenToSquare" /> </button>
                    <p> {count1}</p>
                    <p>|</p>
                    <button className='should_coment_like' onClick={handleIncrement2}> <AiOutlineDislike className="FaRegPenToSquare" /> </button>
                    <p> {count2}</p>
                  </div>
                </div>


                <div className="should_comets_anna">
                  <div className="should_anna">
                    <FaRegUserCircle className="FaRegUserCircle" />
                    <ul >
                      <li className="anna_ley">Anna_Ley</li>
                      <li className="march_anna">March 30, 2023</li>
                    </ul>
                    <div className="should_coment_price">
                      <FaStar />
                      4.6
                    </div>
                  </div>

                  <p>This article deepened my appreciation for headphones as not only devices of entertainment but also as <br />
                    a blend of science and innovation that enrich our auditory experiences.</p>
                  <div className="show_btn">
                    <button className="show_More"> Show More<IoChevronDownOutline /></button>
                  </div>

                  <div className="comet_like">
                    <button className='should_coment_like' onClick={handleIncrement3}> <AiOutlineLike className="FaRegPenToSquare" /> </button>
                    <p> {count3}</p>
                    <p>|</p>
                    <button className='should_coment_like' onClick={handleIncrement4}> <AiOutlineDislike className="FaRegPenToSquare" /> </button>
                    <p> {count4}</p>
                  </div>
                </div>


                <div className="should_comets_anna">
                  <div className="should_anna">
                    <FaRegUserCircle className="FaRegUserCircle" />
                    <ul >
                      <li className="anna_ley">Anna_Ley</li>
                      <li className="march_anna">March 30, 2023</li>
                    </ul>
                    <div className="should_coment_price">
                      <FaStar />
                      4.6
                    </div>
                  </div>

                  <p>This article deepened my appreciation for headphones as not only devices of entertainment but also as <br />
                    a blend of science and innovation that enrich our auditory experiences.</p>
                  <div className="show_btn">
                    <button className="show_More"> Show More<IoChevronDownOutline /></button>
                  </div>

                  <div className="comet_like">
                    <button className='should_coment_like' onClick={handleIncrement5}> <AiOutlineLike className="FaRegPenToSquare" /> </button>
                    <p> {count5}</p>
                    <p>|</p>
                    <button className='should_coment_like' onClick={handleIncrement6}> <AiOutlineDislike className="FaRegPenToSquare" /> </button>
                    <p> {count6}</p>
                  </div>
                </div>

              </div>
              <div className="should_message">
                <h1>Leave a Comment</h1>
                <textarea
                  className="should_message_inp"
                  placeholder="Message"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                ></textarea>

                <div className="shoul_submit">
                  <button className='shoul_submit_btn'>Submit</button>
                </div>
              </div>


            </div>










            <div className="should_right">
              <div className="should_categories_title">Categories</div>
              <div className="should_categories_list">
                <div className="should_category">Technology Trends and News</div>
                <div className="should_category">Technology Trends and News</div>
                <div className="should_category">Technology Trends and News</div>
                <div className="should_category">Technology Trends and News</div>
                <div className="should_category">Technology Trends and News</div>
                <div className="should_category">Technology Trends and News</div>
              </div>

              <div className="should_recent_title">Recent Posts</div>

              <div className="should_post">
                <img src={air} alt="Apple AirPods" />
                <div className="should_post_content">
                  <h1>Should You Buy The All New Apple AirPods?</h1>
                  <h2>Be it an iPhone or any <br />
                    other Apple device, they become the talk of town months, Be it an iPhone or any other Apple device, they </h2>

                  <div className="should_post_date">
                    <MdOutlineCalendarMonth className="should_icon" />
                    <h3>August , 7 , 2023</h3>
                  </div>
                </div>
              </div>

              <div className="should_post">
                <img src={air} alt="Apple AirPods" />
                <div className="should_post_content">
                  <h1>Should You Buy The All New Apple AirPods?</h1>
                  <h2>Be it an iPhone or any <br />
                    other Apple device, they become the talk of town months, Be it an iPhone or any other Apple device, they </h2>

                  <div className="should_post_date">
                    <MdOutlineCalendarMonth className="should_icon" />
                    <h3>August , 7 , 2023</h3>
                  </div>
                </div>
              </div>

              <div className="should_post">
                <img src={air} alt="Apple AirPods" />
                <div className="should_post_content">
                  <h1>Should You Buy The All New Apple AirPods?</h1>
                  <h2>Be it an iPhone or any <br />
                    other Apple device, they become the talk of town months, Be it an iPhone or any other Apple device, they </h2>

                  <div className="should_post_date">
                    <MdOutlineCalendarMonth className="should_icon" />
                    <h3>August , 7 , 2023</h3>
                  </div>
                </div>
              </div>


              <div className="shoul_tags">
                <h1>Tags</h1>
                <div className="shoul_tags_btn">
                  <button className="shoul_btn">Technology</button>
                  <button className="shoul_btn">Headset</button>
                  <button className="shoul_btn">Phone</button>
                </div>

                <div className="shoul_tags_btn2">
                  <button className="shoul_btn">Technology</button>
                  <button className="shoul_btn">Headset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
