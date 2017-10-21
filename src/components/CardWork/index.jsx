import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
const propTypes = {
  projectImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

class CardWork extends Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.imgcont}>
          <a href='#' className={styles.triggerimg}>
            <img className={styles.backimg} src={this.props.projectImg} />
          </a>


        <div className={styles.cont}>
          <span className={styles.title}>{this.props.title}</span>
          <p className={styles.subject}>{this.props.desc}</p>
        </div>
        </div>
      </div>
    )
  }
}
CardWork.propTypes = propTypes
export default CardWork
