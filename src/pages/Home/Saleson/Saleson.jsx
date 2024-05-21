import React, { useState, useEffect } from "react";
import "./saleson.css";
import { Link } from "react-router-dom";
import strelka from "../../../assets/images/strelka_trid.png";
import { FaStar } from "react-icons/fa6";

const Third = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setFilter(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error :", error);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="third-container">
        <div className="third-slid-left">
          <h1 className="third-slid-left-h1">Products On Sale</h1>
          <h2 className="third-slid-left-h2">Shop Now!</h2>
          <Link to="/all">
            <button className="third-slid-left-btn">View all <img src={strelka} alt="" /></button>
          </Link>
        </div>
        <ul className="third-slid-card-block">
          {filter.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <div className="third-slid">
      <li className="third-slid-cards">
        <Link to={`/product/${item.id}`}>
          <div className="third-slid-skidka">-50%</div>
          <img className="third-slid-card-img" src={item.image} alt={item.title} />
        </Link>
        <h3 className="third-slid-card-title">{item.title}</h3>
        <p className="third-slid-card-description">{item.description}</p>
        <div className="third-slid-price">
          <p className="third-slid-card-price">${item.price}</p>
          <p className="third-slid-card-price"><FaStar className="third-slid-card-price-star" /> 4.5</p>
        </div>
      </li>
    </div>
  );
};

export default Third;
