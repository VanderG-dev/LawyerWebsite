import styles from "./OfferInfo.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import MainButton from "../../elements/Buttons/MainButton/MainButton";
import SectionImage from "../../elements/SectionImage/SectionImage";

function OfferInfo({ switchModal }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { services = [] } = location.state || {};

  // Use useEffect to redirect if services is empty
  useEffect(() => {
    if (services.length === 0) {
      navigate("/"); // Redirect to home page
    }
  }, [services, navigate]);

  // If redirect is triggered, don't render the component
  if (services.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <SectionImage image="OfferInfo"></SectionImage>
        <h2 className={styles.main_text}>Наши услуги</h2>
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
