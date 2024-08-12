import React from 'react'
// css import
import styles from './styles/index.module.scss'
// 컴포넌트 import 
import CommonHeader from '@/components/common/header/CommonHeader'
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar'
import CommonNav from '@/components/common/navigation/CommonNav'
import CommonFooter from '@/components/common/footer/CommonFooter'

import Card from './components/Card'

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI부분 */}
      <CommonHeader/>
      {/* 공통 NAV UI부분 */}
      <CommonNav/>

      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>Photo_Splash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처 입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받음
            </span>
            {/* 검색창 UI부분 */}
            <CommonSearchBar/>
          </div>
        </div>

        <div className={styles.page__contents__imageBox}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      {/* 공통 Footer UI부분 */}
      <CommonFooter/>
    </div>
  )
}

export default index