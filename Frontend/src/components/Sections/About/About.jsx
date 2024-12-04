import styles from "./About.module.css";
import SectionImage from "../../../components/elements/SectionImage/SectionImage";

function About() {
  return (
    <>
      <div className={styles.container}>
        <SectionImage image="About"></SectionImage>
        <div className={styles.line}></div>
        <h2 className={styles.main_text}>о компании</h2>

        <h2 className={styles.second_text}>
          Мы являемся командой профессиональных юристов из Нижнего Новгорода, обладающих более чем
          десятилетним опытом в различных областях права.
        </h2>

        <h2 className={styles.second_text}>
          К сожалению, в нашем городе и, вероятно, по всей России наблюдается рост числа
          недобросовестных юридических фирм, готовых взять на себя любые дела и обещающих
          стопроцентный результат. В итоге люди часто теряют свои последние средства и остаются с
          отказными решениями судов.
        </h2>

        <h2 className={styles.second_text}>
          Мы выступаем против такой практики предоставления юридических услуг.Мы не взимаем плату за
          юридические консультации.Главная цель нашего объединения — помочь вам в разрешении вашей
          ситуации, а не извлекать из этого прибыль.
        </h2>

        <h2 className={styles.second_text}>
          Вы можете просто задать нам вопрос и получить наше мнение, а решение о том, как
          действовать дальше и с кем сотрудничать, останется за вами.
        </h2>

        <h2 className={styles.second_text}>
          У нас нет общего офиса, и вам не нужно тратить время на поездки к нам; Вы можете получить
          ответ на свой вопрос в любом удобном для вас формате.
        </h2>
      </div>
    </>
  );
}

export default About;
