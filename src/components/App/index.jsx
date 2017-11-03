import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import 'normalize-css'

// Componentes locales
import SideBar from '../SideBar'
import CardWork from '../CardWork'
import About from '../About'
import ContactForm from '../ContactForm'
import Footer from '../Footer'
// Styling
import styles from './styles.css'
// Componentes externos
import ScrollableAnchor from 'react-scrollable-anchor'
import MediaQuery from 'react-responsive'
// Load images
import logo from '../../img/logo_320.svg'
// Incevo
import img1 from '../../img/incevo/incevo (1).jpg'
import img2 from '../../img/incevo/incevo (2).jpg'

// Global styles
require('./globalstyles.css')

class App extends Component {
  
  render () {
    return (
      <div className={styles.grid}>
        <MediaQuery maxWidth={768} className={styles.header}>
          {/* <ScrollableAnchor id={'me'}> */}

              <div className={styles.backlog} />
              <div className={styles.logo}><img src={logo} alt="Brand Juan Jose" /></div>
              <div className={styles.navi}>
                <SideBar />
              </div>
              <p className={styles.descr}>
                <a href="#" className={styles.highlight}>Leader,</a>
                <a href="#" className={styles.highlight}>persistent,</a>
                <a href="#" className={styles.highlight}>loving web</a>
              </p>
            
          {/* </ScrollableAnchor> */}
        </MediaQuery>
        {/* <ScrollableAnchor id={'me'}> */}
          <MediaQuery minWidth={768} className={styles.header}>
            <div className={styles.navigation}>
              <div className={styles.logo}><img src={logo} alt="Brand Juan Jose" /></div>
              <div className={styles.navi}>
                <a className={styles.under} href='#me'>Me</a>
                <a className={styles.under} href='#work'>My Work</a>
                <a className={styles.under} href='#aboutme'>About Me</a>
                <a className={styles.under} href='#contact'>Contact Me</a>
              </div>
            </div>
            <p className={styles.descr}>
              <a href="#" className={styles.highlight}>Leader,</a>
              <a href="#" className={styles.highlight}>persistent,</a>
              <a href="#" className={styles.highlight}>loving web</a>
            </p>
          </MediaQuery>
       {/*  </ScrollableAnchor> */}


        {/* <ScrollableAnchor id={'work'}> */}
          <div className={styles.content}>
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Incevo'}
              desc={'Interactive Design'}
              
            />          
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Follow It'}
              desc={'Standalone App'}
            />
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Incevo'}
              desc={'Interactive Design'}
            />
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Follow It'}
              desc={'Standalone App'}
            />
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Incevo'}
              desc={'Interactive Design'}
            />
            <CardWork
              projectImg={'https://mir-s3-cdn-cf.behance.net/projects/202/8a006757270341.Y3JvcCw1MzcsNDIwLDQ1Myw1MA.jpg'}
              title={'Follow It'}
              desc={'Standalone App'}
            />
          </div>
        {/* </ScrollableAnchor> */}

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
      // </HashRouter>

    )
  }
}

export default App
