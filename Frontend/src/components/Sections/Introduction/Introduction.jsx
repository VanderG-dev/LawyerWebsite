import "../../../pages/Home/Home.css";
import MainButton from "../../elements/Buttons/MainButton/MainButton.jsx";
import arrow from "/icons/main/arrow.png?url";
import SectionImage from "../../elements/SectionImage/SectionImage.jsx";

function TopSection({ switchModal }) {
  return (
    <>
      <div className="main-content-box">
        <SectionImage image="TopSection"></SectionImage>
        <h1 className="main-text">Центр бесплатных юридических консультаций</h1>
        <h2 className="main-second-text">
          Проконсультируйтесь с экспертами в области права по вашей ситуации абсолютно безвозмездно,
          прежде чем совершать какие-либо финансовые операции с юристами!
        </h2>
        <MainButton onClick={switchModal}></MainButton>

        <img className="arrow" src={arrow} alt="arrow" />
      </div>
    </>
  );
}

export default TopSection;