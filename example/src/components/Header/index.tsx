import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.header__title}>
      React&nbsp; <span className={styles.dom__text}>Elements</span>
      &nbsp;Selector
    </div>
  )
}

export default Header
