import React from "react";
import Headerlaptops from "./Headerlaptops/Headerlaptops"
import MacbookM2 from "./MacbookM2/MacbookM2";
import "./laptopsinfo.css";
import { Technical } from "./Technical/Technical";
import Skroll from "./Skrollbar/Skroll";
import { Comment } from "./Comment/Comment";
import Frequently from "./Frequently/Frequently";
import Reviews from "./Reviews/Reviews";
export const Laptopsinfo = () => {

  return (
    <div>
      <div className="container">
        <Headerlaptops />
        <MacbookM2 />
        <Technical />
        <Skroll />
        <Comment />
        <Frequently />
        <Reviews />
      </div>
    </div>
  );
};
