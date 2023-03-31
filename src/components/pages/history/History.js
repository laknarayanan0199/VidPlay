import React from "react";
import {
  useDeleteHistoryLinksMutation,
  useGetHistoryLinksQuery,
} from "../../features/api/apiSlice";
import Layout from "../../layout/Layout";

const History = () => {
  const { data: links } = useGetHistoryLinksQuery();

  const [deleteLink] = useDeleteHistoryLinksMutation();

  const deleteLinkHandler = (link) => {
    deleteLink(link);
  };

  const deleteAllHandler = () => {
    links?.map((id) => deleteLink(id));
  };

  return (
    <Layout>
      <h3 style={{ textAlign: "center" }}>
        The links will be added when clicked between the video and the border
      </h3>
      <div className="delete__all">
        <button onClick={deleteAllHandler}>Delete All</button>
      </div>
      <div className="cards">
        {links?.map((link) => (
          <div key={link.id} className="card">
            <h3>{link.name}</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
              <button onClick={() => deleteLinkHandler(link)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default History;
