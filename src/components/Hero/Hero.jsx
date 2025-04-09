import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Youssef</h1>
        <p className={styles.description}>
          I’m a front-end developer with 1 year of experience using React. Reach
          out if you’d like to learn more!
        </p>
        <a
          href="mailto:youssif.shehata66@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={"/assets/hero/heroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
