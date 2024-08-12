import React from 'react'
import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="src/assets/images/image-logo.png" alt="logo" className={styles.header__logoBox__logo}/>
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>

      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button className={styles.header__profileBox__button}>북마크</button>
        <span className={styles.header__profileBox_userName}>jgmh99 | jegal@naver.com</span>
      </div>
    </header>
  )
}

export default CommonHeader