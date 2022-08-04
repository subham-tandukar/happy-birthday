import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const App = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Section1 />
      <Section5 />
      <Section3 />
      <Section2 />
      <Section4 />
      <Footer />
    </>
  );
};

export default App;
