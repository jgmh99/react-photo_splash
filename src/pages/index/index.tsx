import React from 'react'
import styles from './styles/index.module.scss'

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI부분 */}
      {/* 공통 NAV UI부분 */}
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>Photo_Splash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처 입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받음
            </span>
            {/* 검색창 UI부분 */}
          </div>
        </div>

        <div className={styles.page__contents__imageBox}></div>
      </div>
      {/* 공통 Footer UI부분 */}
    </div>
  )
}

export default index