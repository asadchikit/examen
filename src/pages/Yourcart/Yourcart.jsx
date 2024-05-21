import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa"; // Импорт иконок
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import "./youcart.css";
import Skroll from "../Laptopsinfo/Skrollbar/Skroll";
export const YourCart = () => {
  const {
    cart,
    removeFromCart,
    addToFavorites,
    decreaseQuantity,
    increaseQuantity,
    removeFromFavorites,
    favorites,
  } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setTotalWithDiscount(calculateTotal() - discount);
  }, [discount, cart]);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleDecreaseQuantity = (id) => {
    const itemIndex = cart.findIndex((item) => item.id === id);
    if (cart[itemIndex].quantity === 1) {
      handleRemoveFromCart(id);
    } else {
      cart[itemIndex].quantity -= 1;
      setTotalWithDiscount(calculateTotal() - discount); // Пересчитываем общую сумму с учетом изменений
    }
  };

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const handleAddToFavorites = (item) => {
    if (favorites && favorites.find((favorite) => favorite.id === item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  const [totalWithDiscount, setTotalWithDiscount] = useState(calculateTotal());

  return (
    <div className="container">
      <div className="yourcart__container">
        <div className="yourcart__left__right">
          <ul className="yourcart__left">
            {cart.map((item) => (
              <li className="yourcart__wrapper" key={item.id}>
                <div className="yourcart__img">
                  <img src={item.image} alt="" />
                </div>
                <div className="yourcart__info">
                  <h3>{item.title}</h3>
                  <div className="yourcart__color">
                    <div className="yourcart_colorr"></div>
                    <h3>Black</h3>
                  </div>
                  <div className="yourcart__color__discount">
                    <h3><CiDeliveryTruck className="ciDeliveryTruck" />Free Delivery</h3>
                    <h3><CiDiscount1 className="ciDeliveryTruck" />Guaranteed</h3>
                  </div>
                  <div className="yourcart__delete_price">
                    <div className="yourcart__price__flex">
                      <div className="yourcart__price1">$ 1,293.00</div>
                      <h2 className="yourcart__price">${item.price}</h2>
                    </div>
                    <div className="yourcart__btns">
                      <button
                        className="yourcart__btn__like"
                        onClick={() => handleAddToFavorites(item)}
                      >
                        <GrFavorite />
                      </button>
                      <button
                        className="yourcart__btn__quantity"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <span className="yourcart__quantity">{item.quantity}</span>
                      <button
                        className="yourcart__btn__quantity"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="yourcart__btn"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="yourcart__total">
            <div className="yourcart__adres">
              <p>Итог</p>
              <button className="yourcart__order">Введите скидочный купон здесь</button>
              <hr />
              <p className="yourcart__total__info">
                Итого<span>€{calculateTotal().toFixed(2)}</span>
              </p>
              <p className="yourcart__total__info">
                Доставка<span>€3.98</span>
              </p>
              <p className="yourcart__total__info">
                НДС<span>€27.97</span>
              </p>
              <hr />
              <h3>
                Итого с учетом скидки <span>€{totalWithDiscount.toFixed(2)}</span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div >

      
      <Skroll />

    </div>
  );
};

export default YourCart;
