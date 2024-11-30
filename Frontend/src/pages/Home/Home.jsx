import { useState } from "react";

import Header from "../../layout/Header/Header.jsx";
import TopSection from "./TopSection.jsx";
import NavSection from "../../layout/navigation/NavSection/NavSection.jsx";
import About from "./About/About.jsx";
import Advantages from "./Advantages/Advantages.jsx";
import WorkPlan from "./WorkPlan/WorkPlan.jsx";
import MainForm from "../../components/forms/MainForm/MainForm.jsx";
import ModalForm from "../../components/forms/ModalForm/ModalForm.jsx";

function HomePage() {
  const [isHidden, setIsHidden] = useState(true);

  const switchModal = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <main>
        <Header></Header>
        <TopSection switchModal={switchModal}></TopSection>
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

export default HomePage;
