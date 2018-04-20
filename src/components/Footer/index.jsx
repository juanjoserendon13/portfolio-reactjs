import React from 'react';
import styles from './styles.css';

import logo from '../../img/logo.svg';

const Footer = () => (
  <div className={styles.root}>
    <div className={styles.mylog}><img src={logo} alt="" /></div>
    <div className={styles.footnav}>
      <a className={styles.under} href="#work">My Work</a>
      <a className={styles.under} href="#aboutme">About Me</a>
    </div>
    <div className={styles.socialnet}>
      <a href="https://www.behance.net/juancho217" className={`${styles.icon} ${styles.iconmono} ${styles.behance}`} target="_blank" rel="noopener noreferrer">Behance</a>
      <a href="https://github.com/juanjoserendon13" className={`${styles.icon} ${styles.iconmono} ${styles.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/juanjoserendon/" className={`${styles.icon} ${styles.iconmono} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
    <p className={styles.copy}>
          © 2017 Juan José Rendón. Made in Cali.
    </p>
  </div>
);
export default Footer;
