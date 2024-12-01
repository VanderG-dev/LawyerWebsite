import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

function NavButton({ text, image }) {
  const imagePath = `/icons/Nav/${image}`;

  return (
    <button className={styles.button} aria-label={text}>
      <Link to="/offers" className={styles.link}></Link>
      <img src={imagePath} alt={text} className={styles.image} />
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
}

export default NavButton;
