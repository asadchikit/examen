import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

import "./seller.css";

const Seller = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
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

  useEffect(() => {
    let filteredData = [...filter];

    if (selectedCategory) {
      filteredData = filteredData.filter(
        (item) => item.category === selectedCategory
      );
    }
    setFilter(filteredData);
  }, [selectedCategory]);

  return (
    <section>
      <div className="container">
        <div className="new-products-info">{/* Filter Options */}</div>
        <div className="new-products-h1-start">
          <h1 className="new-products-h1">New Products</h1>

          <Link to="/all">
            <button className="new-products-info-btn">
              View all <MdOutlineNavigateNext />
            </button>
          </Link>
        </div>
        <hr className="new-products-hr" />

        <ul className="new-products-card-blocks">
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
    <li className="new-products-card">
      <Link to={`/product/${item.id}`}>
        <img className="new-products-card-img" src={item.image} alt={item.title} />
      </Link>
      <hr />
      <h3 className="new-products-card-title">{item.title}</h3>
      <div className="new-products-prices">
        <p className="new-products-price">${item.price}</p>
        <p className="new-products-price"><FaStar className="custom-card-price-star" /> 4.5</p>
      </div>
    </li>
  );
};

export default Seller;
