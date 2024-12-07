import styles from "./Advantages.module.css";
import wallet from "../../../assets/icons/advantages/wallet.png";
import balance from "../../../assets/icons/advantages/balance.png";
import home from "../../../assets/icons/advantages/home.png";
import corporate_laws from "../../../assets/icons/advantages/corporate-laws.png";
import law from "../../../assets/icons/advantages/law.png";
import secure_shield from "../../../assets/icons/advantages/secure-shield.png";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function Advantages() {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="Advantages"></SectionImage>
        <h2 className={styles.main_text}>Наши преимущества</h2>

        <h2 className={styles.second_text}>
          С нами вам не нужно беспокоиться о качестве юристов, ведь у вас заранее будет готовый
          ответ на ваш вопрос и вы всегда сможете понять когда вас вводят в заблуждение!
        </h2>

        <div className={styles.align_row}>
          <div className={styles.align}>
            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={wallet} alt="wallet" />
              </div>
              <h2 className={styles.circle_text}>консультация бесплатна</h2>
            </div>

            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={balance} alt="balance" />
              </div>
              <h2 className={styles.circle_text}>Осуществим подбор судебной практики</h2>
            </div>

            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={home} alt="home" />
              </div>
              <h2 className={styles.circle_text}>Онлайн консультация</h2>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.align}>
            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={secure_shield} alt="secure_shield" />
              </div>
              <h2 className={styles.circle_text}>сахраняем Конфиденциальность</h2>
            </div>

            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={law} alt="law" />
              </div>
              <h2 className={styles.circle_text}>Помогли более 30 000 человек</h2>
            </div>

            <div className={styles.circle_align}>
              <div className={styles.circle}>
                <img src={corporate_laws} alt="corporate_laws" />
              </div>
              <h2 className={styles.circle_text}>Команда из 20 юристов</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantages;
