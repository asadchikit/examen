import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

import { HiOutlineOfficeBuilding } from "react-icons/hi";

import "./contact.css";

export default function Contact() {
  return (
    <section className="container">
      <div className="submit_container">
        <div className="submit_card">
          <div className="submit_img">
            <HiOutlineOfficeBuilding   className="submit_logo" />
          </div>
          <div className="submit_title">Office</div>
          <div className="submit_suptitle">
            123 Main Street, <br /> Anytown, USA
          </div>
        </div>
        <div className="submit_card">
          <div className="submit_img">
            <MdOutlineMailOutline className="submit_logo" />
          </div>
          <div className="submit_title">Email</div>
          <div className="submit_suptitle">info@techheim. <br /> com</div>
        </div>
        <div className="submit_card">
          <div className="submit_img">
            <CiPhone className="submit_logo" />
          </div>
          <div className="submit_title">Phone</div>
          <div className="submit_suptitle">+1 (555) 123-4567</div>
        </div>
      </div>
      <div className="submit_section2">
        <div className="submit_main">
          <div className="submit_left">
            <div className="submit_message">Message us</div>
            <p>
              We're here to assist you every step of the way. <br /> Whether you
              have a question, need technical <br /> support, or simply want to
              share your feedback, our <br /> dedicated team is ready to listen
              and provide prompt <br /> assistance.
            </p>
          </div>
          <div className="submit_right">
            <div className="submit_name_input">
              <input
                className="submit_name_inp"
                placeholder="* Your name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="submit_email_input">
              <input
                className="submit_email_inp"
                placeholder="* Email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="submit_message_input">
              <textarea
                className="submit_message_inp"
                placeholder="Message"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="submit_button">Submit</button>
      </div>
    </section>
  );
}
