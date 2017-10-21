import React, {Component} from 'react'
import styles from './styles.css'
import ScrollableAnchor from 'react-scrollable-anchor'

class ContactForm extends Component {
  render () {
    return (
      <div className={styles.root}>
        <ScrollableAnchor id={'contact'}>
          <h1 className={styles.titlesec}>Contact Me</h1>
        </ScrollableAnchor>
        <form
          autocomplete='on'
          className={styles.formu}
          action="https://formspree.io/juanjoserendon13@outlook.com"
          method="POST">
          <legend className={styles.titleform}>Send Me Your Message</legend>
          <span className={styles.titleinp}>Name:</span>
          <input required type="text" name="name"  placeholder="Your Name"/>
          <span className={styles.titleinp}>Email:</span>
          <input required type="email" name="_replyto"  placeholder="Your email"/>
          <span className={styles.titleinp}>Tell me your question:</span>
          <textarea required className={styles.areatxt} name="message" placeholder="Tell me about what are you interest."></textarea>
          <button className={styles.send} type='submit'>Submit</button>
        </form>

      </div>
    )
  }
}
export default ContactForm
