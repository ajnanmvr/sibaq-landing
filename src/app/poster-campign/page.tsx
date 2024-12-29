import Header from "@/components/Header";
import PosterCampaign from "@/components/home/PosterCampaign";
import React from "react";

function page() {
  return (
    <>
      <Header
        pageTitle="Poster Campaign"
        keywords={["Festival", "Downloads", "Files", "Forms", "Criteria"]}
      />
      <PosterCampaign />
    </>
  );
}

export default page;
