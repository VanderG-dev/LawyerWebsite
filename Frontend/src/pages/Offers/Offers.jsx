import { useState } from "react";

import { legalServices } from "../../Data/NavData/NavData.js";

import Header from "../../layout/Header/Header.jsx";
import Footer from "../../layout/Footer/Footer.jsx";

import OfferTop from "../../components/Sections/OfferTop/OfferTop.jsx";
import OfferInfo from "../../components/Sections/OfferInfo/OfferInfo.jsx";

function Offers() {
  return (
    <>
      <main>
        <Header></Header>
        <OfferTop></OfferTop>
        <OfferInfo></OfferInfo>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Offers;
