import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './styles.css';


const propTypes = {
  projectImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  behance: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};


class CardWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      active: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal(event) {
    event.preventDefault();
    this.setState({ showModal: true, active: true });
  }

  handleCloseModal(event) {
    event.preventDefault();
    this.setState({ showModal: false, active: false });
  }

  render() {
    const { active } = this.state;
    return (
      <div className={styles.root} >
        <div className={styles.imgcont}>
          <a href=" " onClick={this.handleOpenModal}>
            <img className={styles.backimg} src={this.props.projectImg} alt="" />
          </a>
          <div className={styles.cont}>
            <span className={styles.title}>{this.props.title}</span>
            <p className={styles.subject}>{this.props.desc}</p>
          </div>
        </div>
        {/* Hidden content */}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Modal"
            // className={`styles.modal ${active ? styles.animated : ''}`}
          className={[styles.modal, active ? styles.animated : ''].join(' ')}
          overlayClassName={styles.overlay}
        >
          {/* Iconos de navegacion */}
          <a
            href=" "
            onClick={this.handleCloseModal}
            className={[styles.button, styles.close].join(' ')}
          >
            <span className="fa fa-times" />
          </a>

          <a
            href={this.props.behance}
            target="_blank"
            className={[styles.button, styles.behance].join(' ')}
          >
            <span className="fa fa-behance" />
          </a>

          <a
            href={this.props.github}
            target="_blank"
            className={[styles.button, styles.github].join(' ')}
          >
            <span className="fa fa-github fa-2x" />
          </a>
          {/* Mapeo de imagenes pasadas por props */}
          <div className={styles.contPres}>
            {this.props.img.map((im, index) => (
              <img src={im} className={styles.imgProject} key={index} alt="" />
             ))}
          </div>
        </ReactModal>


      </div>
    );
  }
}
CardWork.propTypes = propTypes;
export default CardWork;
