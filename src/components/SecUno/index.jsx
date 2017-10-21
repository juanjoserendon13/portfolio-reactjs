import React, {Component} from 'react'
import SecDos from '../SecDos'
import styles from './secuno.css'

class SecUno extends Component {
    render () {
        return (
            <div className={styles.grid}>
                <SecDos className={styles.uno} text="content 1"></SecDos>
                <SecDos className={styles.dos} text="content 2"></SecDos>
            </div>
        )
    }
}

export default SecUno
