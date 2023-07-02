import React from 'react'
import styles from './styles.module.css'

interface IBody {
  children: React.ReactNode
}

function Body({ children }: IBody) {
  return <div className={styles.body__container}>{children}</div>
}

export default Body
