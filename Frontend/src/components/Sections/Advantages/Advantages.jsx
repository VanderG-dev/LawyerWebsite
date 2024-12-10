import styles from "./Advantages.module.css";

import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function Advantages() {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="Advantages"></SectionImage>
        <h2 className={styles.main_text}>Почему выбирают нас?</h2>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <h3>- Консультации бесплатно и без обязательств</h3>
            <p className={styles.p}>
              наши консультации абсолютно бесплатны, без скрытых платежей и уловок.
            </p>
          </li>
          <li className={styles.list}>
            <h3>- Подбор судебной практики </h3>
            <p className={styles.p}>найдем наиболее подходящие решения для вашей ситуации</p>
          </li>
          <li className={styles.list}>
            <h3>- Комфортное взаимодействие </h3>
            <p className={styles.p}>
              выбирайте, как вам удобно получать консультацию: по телефону, в мессенджере или через
              электронную почту!
            </p>
          </li>
          <li className={styles.list}>
            <h3>- Гарантия конфиденциальности </h3>
            <p className={styles.p}>ваша информация под надежной защитой</p>
          </li>
          <li className={styles.list}>
            <h3>- Объясняем сложное простым языком </h3>
            <p className={styles.p}>
              берём трудные или запутанные темы и рассказываем о них так, чтобы любой мог понять.
            </p>
          </li>
          <li className={styles.list}>
            <h3>- Гарантия качества </h3>
            <p className={styles.p}>
              мы следуем строгим стандартам качества и этики, что обеспечивает высокий уровень
              обслуживания и соблюдение профессиональных норм.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Advantages;
