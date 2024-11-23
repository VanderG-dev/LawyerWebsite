import styles from "./NavButton.module.css";

function NavButton({ text, image }) {
  const imagePath = `/icons/Nav/${image}`;

  return (
    <button className={styles.button} aria-label={text}>
      <img src={imagePath} alt={text} className={styles.image} />
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
}

export default NavButton;
