import React, { useEffect, useState } from 'react'
import styles from './CommonNav.module.scss'
import { Link, useLocation } from 'react-router-dom';
import navJson from './nav.json'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { pageState } from '@/recoil/atoms/pageState';
import { searchState } from '@/recoil/atoms/searchState';

//type 넣기
interface NavigationType{
  index: number,
  path: string,
  label: string,
  searchValue: string,
  isActive: boolean
}

function CommonNav() {
  const location = useLocation();

  const [navigation, setNavigation] = useState<NavigationType[]>(navJson);
  //페이지, 검색 state 세팅한다는 의미
  const [page, setPage] = useRecoilState(pageState)
  const [search, setSearch] = useRecoilState(searchState)




  useEffect(()=>{
    navigation.forEach((nav :NavigationType)=>{
      nav.isActive = false //nav를 클릭 할때마다 json파일에 있는 isActive항목을 true로 바꿔줄거기 때문에 클릭후 초기화를 위해 로직 생성
      if(nav.path === location.pathname || location.pathname.includes(nav.path)){
        nav.isActive = true
        setSearch(nav.searchValue)
        setPage(1)//초기화 시키기 위해서 1페이지로 셋팅
      }
    })
    setNavigation([...navigation])
  },[location.pathname])

  // usestate로 선언한 반응성을 가진 데이터를 기반으로 UI반복
  const navLinks = navigation.map((item: NavigationType)=>{
    return(
      <Link to={item.path} className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`} key={item.path}>
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