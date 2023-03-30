import React, { forwardRef, useState } from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import Navbar from "../navbar/Navbar";
import "./layout.css";
import { Modal } from "@mui/material";
import Form from "../form/Form";

const ModalContent = forwardRef((props, ref) => <Form {...props} ref={ref} />);

const Layout = (props) => {
  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <div className={`${props.className ? props.className : "layout"} `}>
      <Navbar />
      <div className="add__button">
        <button onClick={modalHandler}>
          <AddCardIcon />
        </button>
        <Modal open={isModal} onClose={modalHandler}>
          <ModalContent modalHandler={modalHandler} />
        </Modal>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
