import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header__title}>
      React&nbsp; <span className={styles.dom__text}>DOM</span> &nbsp;Picker
    </div>
  )
}

export default Header
