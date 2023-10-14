import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2> Some Info for  Email Application</h2>
      <p>
        Welcome to our email application, where you can send and receive emails
        just like any other mailbox client.
      </p>
      <p>
        <h6>Our application allows you to:</h6>
      </p>
      <ul>
        <li>Here Compose and send emails to anyone </li>
        <li>Here Receive and read emails from your contacts.</li>
        <li>Here delete mails from emails.</li>
        <li>Here Search emails using our search functionality.</li>
      </ul>
      <p>
        <h4>Stay connected !!</h4>
      </p>
    </section>
  );
};

export default About;
