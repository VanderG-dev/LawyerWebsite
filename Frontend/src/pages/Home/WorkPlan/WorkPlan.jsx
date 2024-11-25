import styles from "./WorkPlan.module.css";
import lineNumbers from "../../../assets/images/lineNumbers.png";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function WorkPlan() {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="WorkPlan"></SectionImage>

        <img src={lineNumbers} alt="lineNumbers" className={styles.line} />
        <h1 className={styles.main_text}>Как мы работаем</h1>
        <h2 className={styles.second_text}>ознакомьтесь с этапами нашей работы</h2>

        <h1 className={styles.sub_text}>Получение заявки на бесплатную консультацию </h1>
        <h2 className={styles.sub_text_second}>
          Наиболее подробнее опишите вашу проблему и ее срочность для очередности подготовки
          консультации.
        </h2>

        <h1 className={styles.sub_text}>Уточнение необходимых данных и документов </h1>
        <h2 className={styles.sub_text_second}>
          В случае если нам необходима дополнительная информация или иные документы для наиболее
          правильной и полной консультации, профильный юрист свяжется с вами удобным для вас
          способом.
        </h2>

        <h1 className={styles.sub_text}>Передача бесплатной консультации вам</h1>
        <h2 className={styles.sub_text_second}>
          Укажите заранее в каком формате (письменно отдельным файлом на электронную почту, онлайн
          консультацией, устно по телефону, текстом в любой указанный вами месседжер) хотите
          получить ответ.
        </h2>
      </div>
    </>
  );
}

export default WorkPlan;
