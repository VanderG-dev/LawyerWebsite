import styles from "./MainButton.module.css";

function MainButton({ onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      <h1 className={styles.button_text}>Получить консультацию </h1>
    </button>
  );
}

export default MainButton;
