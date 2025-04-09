import styles from "./Skills.module.css";

function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div>
          <ul className={styles.skills}>
            <li className={styles.skillImageContainer}>
              <img src="/assets/logos/icons8-html5-96.png" alt="Html Icon" />
            </li>
            <li className={styles.skillImageContainer}>
              <img src="/assets/logos/icons8-css3-96.png" alt="Css Icon" />
            </li>
            <li className={styles.skillImageContainer}>
              <img src="/assets/logos/icons8-javascript-96.png" alt="Js Icon" />
            </li>
            <li className={styles.skillImageContainer}>
              <img src="/assets/logos/icons8-react-96.png" alt="React Icon" />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.history}>
            <li className={styles.historyItem}>HTML5</li>
            <li className={styles.historyItem}>CSS3</li>
            <li className={styles.historyItem}>JavaScript</li>
            <li className={styles.historyItem}>React.js</li>
            <li className={styles.historyItem}>Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
