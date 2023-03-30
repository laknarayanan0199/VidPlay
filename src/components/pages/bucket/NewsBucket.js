import React from "react";
import Layout from "../../layout/Layout";
import Card from "../../card/Card";
import "./bucket.css";

import { useGetBucketLinksQuery } from "../../features/api/apiSlice";

const NewsBucket = () => {
  const { data: links } = useGetBucketLinksQuery();

  const NewsLinks = links?.filter((edu) => edu.category === "News");

  return (
    <Layout>
      <Card links={NewsLinks} />
    </Layout>
  );
};

export default NewsBucket;
