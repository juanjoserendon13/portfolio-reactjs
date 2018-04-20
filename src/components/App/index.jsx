
import React, { Component } from 'react';
// Componentes externos
import ScrollableAnchor from 'react-scrollable-anchor';
import MediaQuery from 'react-responsive';
import Favicon from 'react-favicon';
import 'normalize-css';
// Componentes locales
import SideBar from '../SideBar';
import CardWork from '../CardWork';
import About from '../About';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
// Styling
import styles from './styles.css';
// Load images
import logo from '../../img/logo_320.svg';
// Incevo
import img1 from '../../img/incevo/incevo1.jpg';
import img2 from '../../img/incevo/incevo2.jpg';
import img3 from '../../img/incevo/incevo3.jpg';
// Followit
import imgf1 from '../../img/followit/follow1.jpg';
import imgf2 from '../../img/followit/follow2.jpg';
// Course
import imgc from '../../img/course_manage/course1.png';
// Verbindung
import imgv1 from '../../img/verbindung/verbindung(1).jpg';
import imgv2 from '../../img/verbindung/verbindung(2).jpg';
import imgv3 from '../../img/verbindung/verbindung(3).jpg';
import imgv4 from '../../img/verbindung/verbindung(4).jpg';

const imgs = [img1, img2, img3];

const imgs2 = [imgf1, imgf2];

const imgs3 = [imgc];

const imgs4 = [imgv1, imgv2, imgv3, imgv4];
// Global styles
require('./globalstyles.css');

const App = () => (
  <div className={styles.grid}>
    <Favicon url="https://raw.githubusercontent.com/juanjoserendon13/portfolio-reactjs/99351f7c1c2e1fbb3265bebd60fd97a95b9fa06f/src/img/logo.svg" />
    <ScrollableAnchor id="me">
      <MediaQuery maxWidth={767} className={styles.header}>


        <div className={styles.backlog} />
        <div className={styles.logo}><img src={logo} alt="Brand Juan Jose" /></div>
        <div className={styles.navi}>
          <SideBar />
        </div>
        <p className={styles.descr}>
          <span className={styles.highlight}>Leader,</span>
          <span className={styles.highlight}>persistent,</span>
          <span className={styles.highlight}>loving web</span>
        </p>
      </MediaQuery>
    </ScrollableAnchor>

    <ScrollableAnchor id="me">
      <MediaQuery minWidth={768} className={styles.header}>

        <div className={styles.navigation}>
          <div className={styles.logo}><img src={logo} alt="Brand Juan Jose" /></div>
          <div className={styles.navi}>
            <a className={styles.under} href="#me">Me</a>
            <a className={styles.under} href="#work">My Work</a>
            <a className={styles.under} href="#aboutme">About Me</a>
            <a className={styles.under} href="#contact">Contact Me</a>
          </div>
        </div>
        <p className={styles.descr}>
          <span className={styles.highlight}>Leader,</span>
          <span className={styles.highlight}>persistent,</span>
          <span className={styles.highlight}>loving web</span>
        </p>

      </MediaQuery>
    </ScrollableAnchor>


    <ScrollableAnchor id="work">
      <div className={styles.content}>
        <CardWork
          key="1"
          projectImg="https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg"
          title="Incevo"
          desc="Interactive Design"
          img={imgs}
          behance="https://www.behance.net/gallery/57270341/Incevo"
          github="https://github.com/juanjoserendon13/Incevo"
        />
        <CardWork
          key="2"
          projectImg="https://mir-s3-cdn-cf.behance.net/projects/202/564dfc56766797.Y3JvcCw5ODcsNzczLDExOSwyMjY.jpg"
          title="Follow It"
          desc="Standalone App"
          img={imgs2}
          behance="https://www.behance.net/gallery/56766797/Follow-It"
          github="https://github.com/juanjoserendon13/Follow_It_app"
        />
        <CardWork
          key="3"
          projectImg="https://mir-s3-cdn-cf.behance.net/projects/202/95d4fd56771761.Y3JvcCwxNzkwLDE0MDEsMTI4LDEwMDM.jpg"
          title="Grades"
          desc="Web App"
          img={imgs3}
          behance="https://www.behance.net/gallery/56771761/Course-Management-Web-App"
          github="https://github.com/juanjoserendon13/taller3_P_web"
        />
        <CardWork
          key="4"
          projectImg="https://mir-s3-cdn-cf.behance.net/projects/202/8d7eee64448959.Y3JvcCw5MjEsNzIxLDQ5OCwxNDc.jpg"
          title="Verbindung"
          desc="Game"
          img={imgs4}
          behance="https://www.behance.net/gallery/64448959/Verbindung-Game"
          github="https://www.behance.net/gallery/64448959/Verbindung-Game"
        />

      </div>
    </ScrollableAnchor>

    {/* <ScrollableAnchor id={'aboutme'}> */}
    <About className={styles.about} />
    {/* </ScrollableAnchor> */}

    {/* <ScrollableAnchor id={'contact'}> */}
    <ContactForm className={styles.contact} />
    {/* </ScrollableAnchor> */}

    <Footer />

  </div>
  // <HashRouter>
  //   <div>
  //     <Route exact={true} path='/' render={() => (
  //       <SecUno></SecUno>
  //     )} />
  //
  //     <Route exact={true} path='/miseccion' render={() => (
  //       <SecUno text='MI PORTAFOLIO SECCION'></SecUno>
  //     )} />
  //
  //   </div>
  // </HashRouter> */

);

export default App;
