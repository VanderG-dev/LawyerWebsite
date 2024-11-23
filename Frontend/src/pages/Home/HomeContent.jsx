import "./Home.css";
import MainButton from "../../components/elements/MainButton/MainButton.jsx";
import arrow from "/icons/main/arrow.png?url";

function HomeContent() {
  return (
    <>
      <div
        className="main-content-box"
        style={{
          backgroundImage: "url(/images/headerBG.png)", // Path relative to the public folder
          backgroundSize: "cover",
        }}
      >
        <h1 className="main-text">Центр бесплатных юридических консультаций</h1>
        <h2 className="main-second-text">
          Проконсультируйтесь с экспертами в области права по вашей ситуации абсолютно безвозмездно,
          прежде чем совершать какие-либо финансовые операции с юристами!
        </h2>
        <MainButton></MainButton>
        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </>
  );
}

export default HomeContent;
