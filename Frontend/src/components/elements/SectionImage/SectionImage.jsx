import styles from "./SectionImage.module.css";

function SectionImage({ image }) {
  return (
    <div
      className={styles.section_image}
      style={{
        backgroundImage: `url(/images/${image}.png)`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default SectionImage;
