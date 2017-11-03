import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

import ReactModal from 'react-modal'
import {CSSTransition, transit} from 'react-css-transition'

const propTypes = {
  projectImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.array
}

class CardWork extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      active: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  handleOpenModal (event) {
    event.preventDefault()
    this.setState({showModal: true, active: true})
    console.log("ESTADO transition: " + this.state.active)

  }

  handleCloseModal (event) {
    event.preventDefault()
    this.setState({ showModal: false, active: false})
  }

  render () {
    const {active} = this.state
    return (
      <div className={styles.root} >
        <div className={styles.imgcont}>
          <a href=' ' onClick={this.handleOpenModal}>
            <img className={styles.backimg} src={this.props.projectImg} />
          </a>
          <div className={styles.cont}>
            <span className={styles.title}>{this.props.title}</span>
            <p className={styles.subject}>{this.props.desc}</p>
          </div>
        </div>
        {/* Hidden content*/}
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            // className={`styles.modal ${active ? styles.animated : ''}`}
            className={[styles.modal,  active ? styles.animated : ''].join(' ')}
            overlayClassName={styles.overlay}>
            <a href=' '
              onClick={this.handleCloseModal} className={styles.close}>
              <span className='fa fa-times buttonclose'></span>
            </a>
            <img src={this.props.projectImg} className={styles.imgProject} />
          </ReactModal>

      </div>
    )
  }
}
CardWork.propTypes = propTypes
export default CardWork
