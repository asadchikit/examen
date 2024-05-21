import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import logo from "../../assets/images/logo (1).png";
import Headersingup from "../../pages/Modal/Headersingup/Headersingup";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <div className="header__logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="header__center">
              <ul className="header__ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <CiSearch className="header__icon" />
              <Link to="/yourcart"> <FaShoppingBasket className="header__icon" /></Link>
              <Headersingup />
            </div>
          </div>
        </div>
      </header>
      <hr className="hl" />
    </div>
  );
};

export default Header;
