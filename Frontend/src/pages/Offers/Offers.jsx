import { useState } from "react";

import Header from "../../layout/Header/Header.jsx";
import Footer from "../../layout/Footer/Footer.jsx";

import ModalForm from "../../components/forms/ModalForm/ModalForm.jsx";
import OfferTop from "../../components/Sections/OfferTop/OfferTop.jsx";
import OfferInfo from "../../components/Sections/OfferInfo/OfferInfo.jsx";

function Offers() {
  const [isHidden, setIsHidden] = useState(true);

  const switchModal = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <main>
        <Header></Header>
        <OfferTop></OfferTop>
        {!isHidden && <ModalForm switchModal={switchModal}></ModalForm>}
        <OfferInfo switchModal={switchModal}></OfferInfo>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Offers;
