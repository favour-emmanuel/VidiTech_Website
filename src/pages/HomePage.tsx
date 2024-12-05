import Hero from "../components/Hero";
import ServicesWeOffer from "../components/ServicesWeOffer";
import WhatWeveDone from "../components/WhatWeveDone";
import WhoWeAreSection from "../components/WhoWeAreSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhoWeAreSection />
      <ServicesWeOffer />
      <WhatWeveDone />
    </>
  );
};

export default HomePage;
