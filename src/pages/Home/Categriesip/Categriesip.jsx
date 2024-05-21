import React, { useState, useEffect } from "react";
import "./categriesip.css";
import { Link } from "react-router-dom";

const Second = () => {
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
      <div className="second__one">
        {loading ? (
          <center>loading</center>
        ) : (
          <>
            <ul className="second__one__card__blocks">
              {filter.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

const Card = ({ item }) => {
  return (
    <li className="second__one__card">
      <Link to={`/product/${item.id}`}>
        <img className="second__one__card__img" src={item.image} alt={item.title} />
      </Link>
      <h3 className="second__one__card__title">{item.title}</h3>
    </li>
  );
};

export default Second;
