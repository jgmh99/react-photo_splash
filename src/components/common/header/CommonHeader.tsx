import React, { useEffect } from 'react'
import styles from './CommonHeader.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'

function CommonHeader() {
  const navigate = useNavigate()
  const moveToPage = (pageFilter :string) => {
    if(pageFilter === 'main'){
      navigate('/')
    }
    else if(pageFilter === 'bookmark'){
      navigate('/bookmark')
    }
  }
  
  const nowLocation = useLocation()
  
  return (
    <header className={styles.header}>  
      <div className={styles.header__logoBox}>
        <img src="src/assets/images/image-logo.png" alt="logo" className={styles.header__logoBox__logo} onClick={()=> moveToPage('main')}/>
        {
          nowLocation.pathname == "/bookmark" ? <span className={styles.header__logoBox__title}>PhotoSplash - BookMark</span> : <span className={styles.header__logoBox__title}>PhotoSplash</span>
        }
        
      </div>

      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button className={styles.header__profileBox__button} onClick={() => moveToPage('bookmark')}>북마크</button>
        <span className={styles.header__profileBox_userName}>jgmh99 | jegal@naver.com</span>
      </div>
    </header>
  )
}

export default CommonHeader