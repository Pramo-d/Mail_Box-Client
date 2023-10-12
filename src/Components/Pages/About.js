import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.aboutSection}>
      <h2>About Our Email Application</h2>
      <p>
        Welcome to our email application, where you can send and receive emails
        just like any other mailbox.
      </p>
      <h6>In the application you access...</h6>
      <ul>
        <li>Here Compose and send emails to anyone in your contact list.</li>
        <li>Here Receive and read emails from your contacts.</li>
        <li>Here Organize your emails with folders and labels.</li>
        <li>
          Here Search for specific emails using advanced search functionality.
        </li>
        <li> Here Customize your email settings </li>
      </ul>
      <h4>Stay Connected with Ease!</h4>
    </section>
  );
};

export default About;
