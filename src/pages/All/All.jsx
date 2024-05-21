import React, { useEffect, useState } from "react";
import { BiSolidCartDownload } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { useCart } from "../../context/CartContext";
import "./all.css";

const All = () => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setDatas(json);
        setFilter(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredData = datas;
    if (search.trim() !== "") {
      filteredData = filteredData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilter(filteredData);
  }, [search, datas]);

  return (
    <div className="container">
      {loading ? (
        <center>Loading...</center>
      ) : (
        <ul className="viewall">
          {filter.length ? (
            filter.map((item) => (
              <li className="viewall__card" key={item.id}>
                <img className="viewall__img" src={item.image} alt={item.title} />
                <hr />
                <h3 className="viewall__title">{item.title}</h3>
                <p className="viewall__description">{item.description}</p>
                <p className="viewall__price">${item.price}</p>
                <div className="viewall__btns">
                  <button className="viewall__btn1">
                    <GrFavorite />
                  </button>
                  <button className="viewall__btn2" onClick={() => addToCart(item)}>
                    <BiSolidCartDownload />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default All;
