import styles from "./Contact.module.css";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>Don’t feel hesitate to contact me</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:youssif.shehata66@gmail.com">
            youssif.shehata66@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="linkedin icon" />
          <a
            href="https://www.linkedin.com/in/youssif-shehata-04a059205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            linkedin.com/youssefshehata
          </a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/youssefshehata</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
