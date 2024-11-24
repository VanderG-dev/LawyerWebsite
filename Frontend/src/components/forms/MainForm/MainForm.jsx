import styles from "./MainForm.module.css";
import MainButton from "../../elements/MainButton/MainButton";

function MainForm() {
  return (
    <>
      <div
        className={styles.box}
        style={{
          backgroundImage: "url(/images/FormBG.png)",
          backgroundSize: "cover",
        }}
      >
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
          <h2 className={styles.second_text}>Выберите форму получения юридической консультации:</h2>
          <label>
            <input type="checkbox" name="checkbox1" value="value1" />
            Устно по номеру телефона
          </label>
          <label>
            <input type="checkbox" name="checkbox1" value="value1" />
            Письменно на электронную почту
          </label>
          <label>
            <input type="checkbox" name="checkbox1" value="value1" />
            Онлайн консультация
          </label>
          <label>
            <input type="checkbox" name="checkbox1" value="value1" />
            Письменно через месседжер
          </label>
          <MainButton></MainButton>
        </form>
      </div>
    </>
  );
}

export default MainForm;
