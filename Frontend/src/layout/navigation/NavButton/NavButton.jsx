import styles from "./NavButton.module.css";

function NavButton({ text, image, setWindow }) {
  const imagePath = `/icons/Nav/${image}`;

  return (
    <button
      className={styles.button}
      aria-label={text}
      onClick={() => setWindow(false)} // Set the state or toggle it
    >
      <img src={imagePath} alt={text} className={styles.image} />
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
}

export default NavButton;
