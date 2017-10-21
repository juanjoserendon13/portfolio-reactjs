import React, {Component} from 'react'
import styles from './secdos.css'

class SecDos extends Component {
  render () {
    return (
        <div className={styles.root}>    
            <h1>{this.props.text}</h1>  
        </div>
    )
  }  
}

export default SecDos