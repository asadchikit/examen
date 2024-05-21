import React, { useState } from "react";
import "./headersingup.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { RiUserLine } from "react-icons/ri";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Checkbox from "@mui/material/Checkbox";
import { TbBrandGoogleFilled } from "react-icons/tb";

<RiUserLine className="modal__icon" />;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 5.12,
  px: 10,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <React.Fragment>
      <div className="modal__open">
        <Button className="modal__open-btn" onClick={handleOpen}>
          Create Account
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 624 }}>
          <div className="modal__container">
            <h2 className="modal__title">Create your account </h2>
            <div className="modal__input-group">
              <div className="modal__input-wrapper">
                <input
                  className="modal__input"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="modal__input-wrapper">
                <input className="modal__input" type="text" placeholder="E-mail" />
              </div>
              <div className="modal__input-wrapper">
                <label>
                  <input
                    className="modal__input-password"
                    type={visible ? "text" : "password"}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </label>
                <button className="modal__toggle-visibility" onClick={toggleVisibility}>
                  {visible ? (
                    <FiEye className="modal__icon-eye" />
                  ) : (
                    <FiEyeOff className="modal__icon-eye" />
                  )}
                </button>
              </div>
            </div>

            <div className="modal__checkbox-group">
              <Checkbox {...label} defaultChecked />
              <h1>I agree to all</h1>
              <h2 className="modal__terms"> Terms & Conditions</h2>
            </div>

            <button className="modal__login-btn">Log In</button>

            <div className="modal__or-group">
              <hr className="modal__or-hr" />
              <button className="modal__or-btn">Or Log In with</button>
              <hr className="modal__or-hr" />
            </div>

            <div className="modal__google-login">
              <button className="modal__google-btn">
                <TbBrandGoogleFilled />
                Google
              </button>
              <button className="modal__google-btn">
                <TbBrandGoogleFilled />
                Google
              </button>
            </div>
            <div className="modal__signup-prompt">
              <h1>Don’t have an account ? </h1>
              <h2>Sign up</h2>
            </div>
          </div>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <RiUserLine className="modal__icon" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 624 }}>
          <div className="modal__container">
            <ChildModal />
            <h2 className="modal__title">Log in to Tech Heim </h2>
            <div className="modal__input-group">
              <div className="modal__input-wrapper">
                <input className="modal__input" type="text" placeholder="E-mail" />
              </div>
              <div className="modal__input-wrapper">
                <label>
                  <input
                    className="modal__input-password"
                    type={visible ? "text" : "password"}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                </label>
                <button className="modal__toggle-visibility" onClick={toggleVisibility}>
                  {visible ? (
                    <FiEye className="modal__icon-eye" />
                  ) : (
                    <FiEyeOff className="modal__icon-eye" />
                  )}
                </button>
              </div>
            </div>
            <h1 className="modal__forgot-password">Forgot Password ?</h1>

            <div className="modal__checkbox-group">
              <Checkbox {...label} defaultChecked />
              <h1>Keep me logged in </h1>
            </div>

            <button className="modal__login-btn">Log In</button>

            <div className="modal__or-group">
              <hr className="modal__or-hr" />
              <button className="modal__or-btn">Or Log In with</button>
              <hr className="modal__or-hr" />
            </div>

            <div className="modal__google-login">
              <button className="modal__google-btn">
                <TbBrandGoogleFilled />
                Google
              </button>
              <button className="modal__google-btn">
                <TbBrandGoogleFilled />
                Google
              </button>
            </div>

            <div className="modal__signup-prompt">
              <h1>Don’t have an account ? </h1>
              <h2>Sign up</h2>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
