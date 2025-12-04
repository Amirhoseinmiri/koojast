import React from "react";
import HeroSection from "./hero";
import IntroBussines from "./intro-bussines";
import RelatedBussines from "./related-bussines";

const BussinessHome = () => {
  return (
    <div className="max-w-6xl flex flex-col items-center gap-4 justify-center mx-auto">
      <HeroSection />
      <div className="flex justify-center flex-col lg:flex-row gap-4 w-full">
        <RelatedBussines />
        <IntroBussines />
      </div>
    </div>
  );
};

export default BussinessHome;
