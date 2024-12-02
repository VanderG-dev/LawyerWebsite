import styles from "./OfferInfo.module.css";
import { useLocation } from "react-router-dom";

import MainButton from "../../elements/Buttons/MainButton/MainButton";
import SectionImage from "../../elements/SectionImage/SectionImage";

function OfferInfo({ switchModal }) {
  const location = useLocation();
  const { description, services } = location.state || {};
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="OfferInfo"></SectionImage>
        <h1 className={styles.main_text}>Наши услуги</h1>
        <div className="z-10 flex flex-col">
          <ul className={styles.list}>
            {services.map((service, index) => (
              <div>
                <li key={index} className={styles.list_element}>
                  {service.name}
                </li>
                <h2>{service.description}</h2>
              </div>
            ))}
          </ul>
          <div className="flex justify-center">
            <MainButton onClick={switchModal}></MainButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferInfo;
