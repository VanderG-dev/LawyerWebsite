import styles from "./OfferTop.module.css";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";
import { useLocation } from "react-router-dom";

function OfferTop({ switchModal }) {
  const location = useLocation();
  const { category, description, icon, BgImage } = location.state || {};

  return (
    <>
      <div className={styles.container}>
        <SectionImage image={BgImage}></SectionImage>

        <div className={styles.text_container}>
          <div className={styles.image_align}>
            <img src={`/icons/Nav/${icon}`} alt="family" className={styles.image} />
            <h1 className={styles.main_text}>{category}</h1>
          </div>

          <h2 className={styles.second_text}>{description}</h2>
        </div>
      </div>
    </>
  );
}

export default OfferTop;
