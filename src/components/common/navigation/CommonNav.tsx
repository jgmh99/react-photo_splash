import React, { useState } from 'react'
import styles from './CommonNav.module.scss'
import { Link } from 'react-router-dom';
import navJson from './nav.json'

//type 넣기
interface NavigationType{
  index: number,
  path: string,
  label: string,
  searchValue: string,
  isActive: boolean
}

function CommonNav() {
  const [navigation, setNavigation] = useState<NavigationType[]>(navJson);
  // usestate로 선언한 반응성을 가진 데이터를 기반으로 UI반복
  const navLinks = navigation.map((item: NavigationType)=>{
    return(
      <Link to={item.path} className={styles.navigation__menu} key={item.path}>
        <span className={styles.navigation__menu__label}>{item.label}</span>
      </Link>
    )

  })

  return (
    <nav className={styles.navigation}>
      {/* <div className={styles.navigation__menu}>
        <span className={styles.navigation__menu__label}></span>
      </div> */}
      {navLinks}
    </nav>
  )
}

export default CommonNav