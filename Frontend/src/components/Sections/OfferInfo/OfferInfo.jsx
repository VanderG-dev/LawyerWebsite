import styles from "./OfferInfo.module.css";
import { useLocation } from "react-router-dom";

import SectionImage from "../../elements/SectionImage/SectionImage";

function OfferInfo() {
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
              <li key={index} className={styles.list_element}>
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default OfferInfo;
