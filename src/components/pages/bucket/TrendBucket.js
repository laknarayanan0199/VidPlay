import React from "react";
import Layout from "../../layout/Layout";
import Card from "../../card/Card";
import "./bucket.css";

import { useGetBucketLinksQuery } from "../../features/api/apiSlice";

const TrendBucket = () => {
  const { data: links } = useGetBucketLinksQuery();

  const TrendLinks = links?.filter((edu) => edu.category === "Trending");


  return (
    <Layout>
      <Card links={TrendLinks} />
    </Layout>
  );
};

export default TrendBucket;
