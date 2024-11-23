import Header from "../../layout/Header/Header.jsx";
import HomeContent from "./HomeContent.jsx";
import Nav from "../../layout/navigation/Nav/Nav.jsx";
import About from "./About/About.jsx";
import Advantages from "./Advantages/Advantages.jsx";
import WorkPlan from "./WorkPlan/WorkPlan.jsx";

function HomePage() {
  return (
    <>
      <main>
        <Header></Header>
        <HomeContent></HomeContent>
        <Nav></Nav>
        <About></About>
        <Advantages></Advantages>
        <WorkPlan></WorkPlan>
      </main>
    </>
  );
}

export default HomePage;
