import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I’m a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Former Accountant</h3>
              <p>
                I’m a former accountant who transitioned into frontend
                development, bringing with me a strong foundation in data
                accuracy, problem-solving, and detail-oriented work
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
