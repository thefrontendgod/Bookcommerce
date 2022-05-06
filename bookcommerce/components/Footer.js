// import libraries
import React from 'react'
import FooterFirstrow from './FooterFirstrow'
import FooterSecondrow from './FooterSecondrow'

// import styles
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.wraps}>
      <FooterFirstrow />
      <FooterSecondrow />
    </div>
  )
}
