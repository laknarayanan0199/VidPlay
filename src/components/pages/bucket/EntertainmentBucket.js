import React from "react";
import Layout from "../../layout/Layout";
import Card from "../../card/Card";
import "./bucket.css";

import { useGetBucketLinksQuery } from "../../features/api/apiSlice";

const EntertainmentBucket = () => {
  const { data: links } = useGetBucketLinksQuery();

  const EntertainmentLinks = links?.filter(
    (edu) => edu.category === "Entertainment"
  );

  return (
    <Layout>
      <Card links={EntertainmentLinks} />
    </Layout>
  );
};

export default EntertainmentBucket;
