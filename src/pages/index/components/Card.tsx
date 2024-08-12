import React from 'react'
import styles from './Card.module.scss'
import { CardDTO } from '../types/card'

interface Props{
  data : CardDTO,
  handleDialog :(e:boolean)=>void,
  handleSetData :(e:CardDTO)=>void
}

function card({data, handleDialog, handleSetData} : Props) {
  const openDialog = ()=>{
    console.log('함수 호출')
    handleDialog(true)
    handleSetData(data)
  }

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src={data.urls.small} alt={data.alt_description} className={styles.card__image}/>
    </div>
  )
}

export default card