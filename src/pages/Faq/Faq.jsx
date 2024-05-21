import React from "react";
import "./faq.css";
import askedImage from "../../assets/images/asked.png";

export const Faq = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="faq-sect_head">
          <div className="faq-sect_head_img">
            <img src={askedImage} alt="Asked" />
          </div>
        </div>
        <div className="faq-section_suptitles">
          <div className="faq-section_sup_left">
            <div className="faq-table">Table of Contents</div>
            <div className="faq_left_title_main">
              <div className="faq_left_title">General</div>
              <div className="faq_left_title">Trusts & Safety</div>
              <div className="faq_left_title">Services</div>
              <div className="faq_left_title">Billing</div>
            </div>
          </div>
          <div className="faq-section_sup_right">
            <div className="faq-can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
        </div>
        <hr className="faq-hr" />
        <div className="faq-section_bloks">
          <div className="faq-section_sup_right">
            <div className="faq-can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="faq-he" />
        </div>
        <div className="faq-section_bloks">
          <div className="faq-section_sup_right">
            <div className="faq-can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="faq-he" />
        </div>
        <div className="faq-section_bloks">
          <div className="faq-section_sup_right">
            <div className="faq-can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
          <hr className="faq-he" />
        </div>
        <div className="faq-section_bloks">
          <div className="faq-section_sup_right">
            <div className="faq-can">
              Can I purchase products from Tech Heim using installment <br />{" "}
              payments?
            </div>
            <p>
              Yes, Tech Heim offers the option to purchase products using both
              cash and <br /> installment payments. This allows you to choose
              the payment method that suits <br /> your needs and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
