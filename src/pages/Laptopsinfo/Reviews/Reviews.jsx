import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import video from "../../../assets/images/Videos card.png";

import "./reviews.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function Reviews() {
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
            <div className="similar-products-vidos">Reviews</div>
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
        <li className="similar-product-vidos">
            <Link to={`/product/${item.id}`} className="similar-product-link">
                <div className="similar-product-discount">-50%</div>
                <img
                    className="similar-product-vidos"
                    src={video}
                />
            </Link>
        </li>
    );
};
