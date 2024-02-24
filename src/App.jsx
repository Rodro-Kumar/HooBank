import React from "react";
import Nav from "./Component/Nav/Nav";
import Hero from "./Component/Hero/Hero";
import Feature from "./Component/Feature/Feature";
import Billing from "./Component/Billing/Billing";
import Deal from "./Component/Deal/Deal";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <Billing />
      <Deal />
      <About />
      <Service />
      <Footer />
    </>
  );
}

export default App;
