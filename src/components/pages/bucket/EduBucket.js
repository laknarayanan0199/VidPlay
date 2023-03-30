import React from "react";
import Layout from "../../layout/Layout";
import Card from "../../card/Card";
import "./bucket.css";

import { useGetBucketLinksQuery } from "../../features/api/apiSlice";

const EduBucket = () => {
  const { data: links } = useGetBucketLinksQuery();

  const EduLinks = links?.filter((edu) => edu.category === "Education");

  return (
    <Layout>
      <Card links={EduLinks} />
    </Layout>
  );
};

export default EduBucket;
