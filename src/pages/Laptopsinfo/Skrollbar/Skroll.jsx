import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./skroll.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function Skroll() {
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
    <>
      <div className="similar-products-title">Similar Products</div>
      <div className="similar-products-scroll-container">
        <ul className="similar-products-scroll-list">
          {filter.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
}

const Card = ({ item }) => {
  return (
    <li className="similar-product">
      <Link to={`/product/${item.id}`} className="similar-product-link">
        <div className="similar-product-discount">-50%</div>
        <img
          className="similar-product-img"
          src={item.image}
          alt={item.title}
        />
        <h3 className="similar-product-title">{item.title}</h3>
          <p className="similar-product-description">{item.description}</p>
        <div className="similar-product-price-section">
          <p className="similar-product-price">${item.price}</p>
          <p className="similar-product-rating">
            <FaStar className="similar-product-star" /> 4.5
          </p>
        </div>
      </Link>
    </li>
  );
};
