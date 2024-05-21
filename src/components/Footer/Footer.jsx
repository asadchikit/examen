import React from "react";
import "./footer.css";
import { LuMail } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import paypal from "../../assets/images/paypal.png";
import { IoIosArrowDropup } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import american from "../../assets/images/american express.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master card.png";
import copyri from "../../assets/images/copyright.png";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__columns">
            <ul className="footer__column">
              <h1>Company</h1>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/blogfooter">
                <li>Blog</li>
              </Link>
              <Link to="/returns">
                <li>Returns</li>
              </Link>
              <Link to="/order">
                <li>Order Status</li>
              </Link>
            </ul>

            <ul className="footer__column">
              <h1>Info</h1>
              <li>How It Works?</li>
              <li>Our Promises</li>
              <li>FAQ</li>
            </ul>

            <ul className="footer__column">
              <h1>Company</h1>
              <li>
                <GrLocation />
                About Us
              </li>
              <Link to="../../pages/BlogFooter/">
                <li>
                  <FiPhoneCall />
                  Blog
                </li>
              </Link>
              <li>
                <LuMail />
                Returns
              </li>
            </ul>

            <div className="footer__signup">
              <h1 className="footer__signup-title">
                Sign up for News and Updates
              </h1>
              <div className="footer__signup-input">
                <RiUserLine className="footer__icon-user" />
                <input
                  type="text"
                  className="footer__input"
                  placeholder="E-mail Address"
                />
                <GrFormNext className="footer__icon-next" />
              </div>
              <div className="footer__social-icons">
                <LiaFacebookSquare className="footer__icon" />
                <TfiTwitter className="footer__icon" />
                <FaInstagram className="footer__icon" />
                <FiYoutube className="footer__icon" />
              </div>
            </div>
            <div className="footer__support">
              <AiOutlineQuestionCircle className="footer__icon-question" />
              <br />
              <IoIosArrowDropup className="footer__icon-arrow" />
            </div>
          </div>
          <div className="footer__payment">
            <img src={paypal} alt="PayPal" />
            <img src={american} alt="American Express" />
            <img src={visa} alt="Visa" />
            <img src={master} alt="MasterCard" />
          </div>

          <div className="footer__bottom">
            <div className="footer__bottom-left">
              <img src={copyri} alt="Copyright" />
              <h1>2023 Tech Heim</h1>
            </div>
            <div className="footer__bottom-right">
              <h2>Cookie Settings</h2>
              <h2>Privacy Policy</h2>
              <h2>Terms and Conditions</h2>
              <h2>Imprint</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
