import { useState } from "react";

import Header from "../../layout/Header/Header.jsx";
import Introduction from "../../components/Sections/Introduction/Introduction.jsx";
import NavSection from "../../layout/navigation/NavSection/NavSection.jsx";
import About from "../../components/Sections/About/About.jsx";
import Advantages from "../../components/Sections/Advantages/Advantages.jsx";
import WorkPlan from "../../components/Sections/WorkPlan/WorkPlan.jsx";
import MainForm from "../../components/forms/MainForm/MainForm.jsx";
import ModalForm from "../../components/forms/ModalForm/ModalForm.jsx";

function Offers() {
  const [isHidden, setIsHidden] = useState(true);

  const switchModal = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <main>
        <Header></Header>
        <Introduction switchModal={switchModal}></Introduction>
        {!isHidden && <ModalForm switchModal={switchModal}></ModalForm>}
        <NavSection></NavSection>
        <WorkPlan></WorkPlan>
        <Advantages></Advantages>
        <About></About>
        <MainForm Modal={true}></MainForm>
      </main>
    </>
  );
}

export default Offers;
