import React, { useState } from 'react';
import "./comment.css";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";

import { FaStar } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export const Comment = () => {
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
          <div className="comments_head">Comments</div>

          <div className="comments_container">
            <div className="comments_left">
              <div className="comments_leave">
                leave your comments here for <br /> other customers
              </div>
              <div className="comments_buttons">
                <div className="comments_button1">
                  <button className="comments_btn1">
                    Share your thoughts about this <br /> product here
                  </button>
                </div>
                <div className="comments_button2">
                  <button className="comments_btn2">Comment</button>
                </div>
              </div>
              <div className="comments_by_feature">By feature</div>
              <div className="comments_battery_main">
                <div className="comments_batt_titles">
                  <div className="comments_charge">Battery charge</div>
                  <div className="comments_line"></div>
                  <div className="comments_grade">4.8</div>
                </div>
                <div className="comments_batt_titles">
                  <div className="comments_charge">Monitor</div>
                  <div className="comments_line"></div>
                  <div className="comments_grade">4.8</div>
                </div>
                <div className="comments_batt_titles">
                  <div className="comments_charge">Lightness</div>
                  <div className="comments_line"></div>
                  <div className="comments_grade">4.8</div>
                </div>
              </div>
            </div>
            <div className="comments_right">


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
          </div>

        </div>
      </section>
    </div>
  );
};
