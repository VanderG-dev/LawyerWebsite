import Header from "../../layout/Header/Header.jsx";
import TopSection from "./TopSection.jsx";
import NavSection from "../../layout/navigation/NavSection/NavSection.jsx";
import About from "./About/About.jsx";
import Advantages from "./Advantages/Advantages.jsx";
import WorkPlan from "./WorkPlan/WorkPlan.jsx";
import MainForm from "../../components/forms/MainForm/MainForm.jsx";

function HomePage() {
  return (
    <>
      <main>
        <Header></Header>
        <TopSection></TopSection>
        <NavSection></NavSection>
        <About></About>
        <Advantages></Advantages>
        <WorkPlan></WorkPlan>
        <MainForm></MainForm>
      </main>
    </>
  );
}

export default HomePage;
