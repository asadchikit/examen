import React, { useState, useEffect } from "react";
import "./newproducts.css";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaStar } from "react-icons/fa6";


const Fourth = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

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

  return (
    <section>
      <div className="container">
        <div className="beast_start">
          <div className="beast_h1_start">
            <h1 className="beast_h1">Best Sellers</h1>


            <Link to="/all">
              <button className="beast-info-btn">
                View all
                <MdOutlineNavigateNext />
              </button>
            </Link>
          </div>
          <hr className="beast-hr" />
          <ul className="beast-card-blocks">
            {filter.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <li className="beast-card">
      <Link to={`/product/${item.id}`}>
        <img className="beast-card-img" src={item.image} alt={item.title} />
      </Link>
      <h3 className="beast-card-title">{item.title}</h3>
      <hr />
      <div className="beast-prices">
      <p className="beast-price">${item.price}</p>
      <p className="beast-price"><FaStar className="beast-star" /> 4.5</p>
      </div>
    </li>
  );
};

export default Fourth;
