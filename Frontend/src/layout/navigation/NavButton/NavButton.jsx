import styles from "./NavButton.module.css";
import { Link } from "react-router-dom";

function NavButton({ text, icon, description, urlName, BgImage, services }) {
  const imagePath = `/icons/Nav/${icon}`;

  return (
    <button className={styles.button} aria-label={text}>
      <Link
        to={`/offers/${urlName}`}
        className={styles.link}
        state={{ category: text, description, icon, BgImage, services }}
      >
        {" "}
      </Link>
      <img src={imagePath} alt={text} className={styles.image} />
      <h1 className={styles.text}>{text}</h1>
    </button>
  );
}

export default NavButton;
