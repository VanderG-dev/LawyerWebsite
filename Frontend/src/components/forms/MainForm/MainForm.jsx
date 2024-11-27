import styles from "./MainForm.module.css";
import MainButton from "../../elements/MainButton/MainButton";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";
function MainForm() {
  return (
    <>
      <div className={styles.box}>
        <SectionImage image="Form"></SectionImage>
        <form action="submit" className={styles.form}>
          <h1 className={styles.main_text}>Получить бесплатную консультацию</h1>
          <h2 className={styles.second_text}>
            Заполните необходимые поля, опишите вашу проблему и выберите форму бесплатной
            юридической консультации.
          </h2>
          <input type="text" placeholder="Ваше имя" className={styles.form_input} />
          <input type="text" placeholder="Номер телефона" className={styles.form_input} />
          <input type="text" placeholder="Электронная почта" className={styles.form_input} />
          <input type="text" placeholder="Описание вашей проблемы" className={styles.form_input} />
          {/* <h2 className={styles.second_text}>Выберите форму получения юридической консультации:</h2> */}

          <select className={styles.select} id="select" name="MainForm">
            <option value="" disabled selected>
              форма консультации
            </option>
            <option value="number"> Устно по номеру телефона</option>
            <option value="email"> Письменно на электронную почту</option>
            <option value="cherry"> Онлайн консультация</option>
            <option value="date"> Письменно через месседжер</option>
          </select>

          <MainButton></MainButton>
        </form>
      </div>
    </>
  );
}

export default MainForm;
