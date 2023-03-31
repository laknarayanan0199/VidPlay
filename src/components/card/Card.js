import { Modal } from "@mui/material";
import React, { useState } from "react";
import {
  useAddHistoryLinksMutation,
  useDeleteBucketLinksMutation,
} from "../features/api/apiSlice";
import Form from "../form/Form";
import "./card.css";

const Card = ({ links }) => {
  const [isEdit, setIsEdit] = useState({});
  const [addLink] = useAddHistoryLinksMutation();
  const [deleteLink] = useDeleteBucketLinksMutation();

  const [isModal, setIsModal] = useState(false);

  const modalHandler = () => {
    setIsModal(!isModal);
  };

  const historyHandler = (link) => {
    addLink({
      id: link.id,
      name: link.name,
      category: link.category,
      link: link.link,
    });
  };

  const editHandler = (value) => {
    setIsEdit(value);
    modalHandler();
  };

  const deleteLinkHandler = (link) => {
    deleteLink(link);
  };

  const deleteAllHandler = () => {
    links?.map((id) => deleteLink(id));
  };

  return (
    <>
      <div className="delete__all">
        <button onClick={deleteAllHandler}>Delete All</button>
      </div>
      <div className="cards">
        {links?.map((link) => (
          <div key={link.id} className="card">
            <h3>{link.name}</h3>
            <div
              className="iframe__player"
              onClick={() => historyHandler(link)}
            >
              <iframe
                title={link.name}
                src={link.link}
                style={{ border: "none" }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video"
              />
            </div>
            <div className="action_btns">
              <button onClick={() => editHandler(link)}>Edit</button>
              <button onClick={() => deleteLinkHandler(link)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Modal open={isModal} onClose={modalHandler}>
        <Form modalHandler={modalHandler} isEdit={isEdit} />
      </Modal>
    </>
  );
};

export default Card;
