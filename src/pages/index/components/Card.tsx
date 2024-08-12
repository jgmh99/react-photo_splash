import React from 'react'
import styles from './Card.module.scss'

function card() {
  const openDialog = ()=>{
    console.log('함수 호출')

  }

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="이미지" className={styles.card__image}/>
    </div>
  )
}

export default card