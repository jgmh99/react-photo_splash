import React, { useEffect, useState } from 'react'
import CommonHeader from '@/components/common/header/CommonHeader'
import Card from './components/Card';
//SCSS
import styles from './styles/index.module.scss'
import { CardDTO } from '../index/types/card';

function index() {
  const [data, setData] = useState([]);
  const getData = () =>{
    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

    if(getLocalStorage || getLocalStorage !== null){
      setData(getLocalStorage)
    }
    else{
      setData([])
    }
  }
  
  useEffect(()=>{ //마운트 완료시 getDAta호출
    getData()
  },[])
  console.log(data.length)
  return (
    <div className={styles.page}>
      {/* 공통 헤더 */}
      <CommonHeader/>
      <main className={styles.page__contents}>
        {
          data.length === 0 ?
          (
            <div className={styles.page__contents__noData}> 저장한 이미지들이 없어요! </div>
          )
           : 
          (
            data.map((item :CardDTO)=>{
              return <Card propData={item} key={item.id}/>
            })
          )
        }
        
      </main>
    </div>
  )
}

export default index