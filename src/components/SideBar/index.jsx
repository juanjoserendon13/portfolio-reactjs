import React, {Component} from 'react'
import { slide as Menu } from 'react-burger-menu'
// require('./styles.css')
import styles from './stylesmenu.css'
// require ('./stylesmenu.css')
import PropTypes from 'prop-types' // ES6
//Contenido visual
import iconmenu from '../../img/menu.svg'
//Styling
var stylesmenu = {
  bmBurgerButton: {
    position: 'fixed',
    width: '10.25vw',
    height: '8.375vw',
    right: '4.6875vw'
    // left: '36px',
    // top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '7.5vw',
    width: '7.5vw',
    right: '3vw'

  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    // position: 'fixed',
    background: '#424242',
    padding: '0.5em 1em 0 0.5em',
    fontSize: '4vw',
    color: 'white',
    width: '44.6875vw'

    // zIndex: '99999',
    // position: 'relative'
    // right: '0',
    // width: '44.6875vw'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    // color: '#fff',
    // padding: '0.5em',
    width: '100%'
  },
  bmItem: {
    textDecoration: 'none',
    fontFamily: 'Chamfort Family',
    padding: '1em'

  },
  bmOverlay: {
    // width:'100vw',
    background: 'rgba(0, 0, 0, 0.3)'
  }

}

class SideBar extends Component {

  render () {
    return (
      // width={'44.6875vw'}
     <Menu styles={stylesmenu} right width={'44.6875vw'}
        // burgerButtonClassName={ "fa fa-bars fa-3x" }
        customBurgerIcon={<img src={iconmenu}></img>}  >

            <a id="my-me" className={styles.item} href="#me" >
              <span className={styles.itemicon}><i className="fa fa-user" aria-hidden="true"></i></span>
              Me</a>

              <a id="my-work" className={styles.item} href="#work">
                <span className={styles.itemicon}><i className="fa fa-code" aria-hidden="true"></i></span>
                My Work</a>

                <a id="my-about" className={styles.item} href="#aboutme">
                  <span className={styles.itemicon}><i className="fa fa-id-card-o" aria-hidden="true"></i></span>
                  About Me</a>

                  <a id="my-contact" className={styles.item} href="#contact">
                    <span className={styles.itemicon}><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                    Contact Me</a>

                  </Menu>

                )
              }
            }
            export default SideBar
