import styles from "./WorkPlan.module.css";

function WorkPlan() {
  return (
    <>
      <div
        className={styles.box}
        style={{
          backgroundImage: "url(/images/WorkPlanBG.png)",
          backgroundSize: "cover",
        }}
      >
        <h1 className={styles.main_text}>Как мы работаем</h1>

        <h2 className={styles.second_text}>ознакомьтесь с этапами нашей работы</h2>
      </div>
    </>
  );
}

export default WorkPlan;
