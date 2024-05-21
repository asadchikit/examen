import React from "react";
import { Hero } from "./Hero/Hero";
import Third from "./Saleson/Saleson";
import Second from "./Categriesip/Categriesip";
import Fourth from "./Newproducts/Newproducts";
import { Advertising } from "./Seriesih/Seriesih";
import { Brend } from "./Brend/Brend";
import Seller from "./Seller/Seller";
import { Smart } from "./Smart/Smart";
import { Blog } from "./Blogs/Blogs";
import { About } from "./About/About";
// import Fourth from "./Fourth/Fourth";

function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Second />
        <Third />
        <Seller />
        <Advertising />
        <Fourth />
        <Brend />
        <Smart />
        <Blog />
        <About />
      </div>
    </div>
  );
}

export default Home;
