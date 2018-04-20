import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import styles from './styles.css';
import imgprofile from '../../img/profile_pic.png';


const About = () => (
  <div className={styles.root}>
    <ScrollableAnchor id="aboutme">
      <h1 className={styles.titlesec}>About Me</h1>
    </ScrollableAnchor>
    <div className={styles.profile}>
      <a href="#aboutme"><img src={imgprofile} alt="Juan Jose Pic" /></a>
    </div>
    <p className={styles.aboutme}>
          ¡Hi! I am an <span className={styles.highlight}>interactive media designer</span>
          from Cali, Colombia.
          I love use new technologies especially in web development.
          I have experience with design projects management, and my aproaches
          are <span className={styles.highlight}>web programming</span> and
      <span className={styles.highlight}>UX/UI</span>.
          Also I have abilities in team work and leadership.
          I considering to me a peaceful and kind person.
    </p>

  </div>
);

export default About;
