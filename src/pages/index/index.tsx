import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilValue, useRecoilValueLoadable } from 'recoil'
import {imageData} from '@/recoil/selectors/imageSelectors'
// css import
import styles from './styles/index.module.scss'
// 컴포넌트 import 
import CommonHeader from '@/components/common/header/CommonHeader'
import CommonSearchBar from '@/components/common/searchBar/CommonSearchBar'
import CommonNav from '@/components/common/navigation/CommonNav'
import CommonFooter from '@/components/common/footer/CommonFooter'
import Card from './components/Card'
import DetailDialog from '@/components/common/dialog/DetailDialog'
import Loading from './components/Loading'

// import axios from 'axios'
// 타입 호출
import { CardDTO } from './types/card'
//

function index() {
  //const imgSelector = useRecoilValue(imageData) //recoilvalue를 통해서 불러옴
  const imgSelector = useRecoilValueLoadable(imageData) //
  const [imgData, setImgData] = useState<CardDTO>()
  const [open, setOpen] = useState<boolean>(false) //상세이미지 다이얼로그 괄리 state
  //store관리를 하고 있기 때문에 주석처리
  // const getData = async() => {
  //   //unsplash API 호출
  //   const API_URL = 'https://api.unsplash.com/search/photos'
  //   const API_KEY = 'GLhsNZhR6mzcIpyGyruG1jBg8hkg4udR0TfGWNSyNr4'
  //   const PER_PAGE = 30;

  //   const searchValue = 'Korea';
  //   const pageValue = 100;

  //   try{
  //     const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
  //     console.log(res)
  //     if(res.status === 200){
  //       setImgUrls(res.data.results)
  //     }
  //     // 
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  // const CARD_LIST = imgSelectors.data.results.map( (card:CardDTO) => {
  //   return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>
  // })
  const CARD_LIST = useMemo(()=>{
    //imgSelector의 값이 hasValue | loading일 경우
    console.log(imgSelector) //ValueLoadable {state: 'hasValue', contents: {…}} 출력
    
    if(imgSelector.state === 'hasValue'){
      const result = imgSelector.contents.results.map( (card:CardDTO) => { //contents를 반복적으로 돌려야하기 때문에 imgSelector.contents.map사용
        return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>
      })
      return result
    }
    else{
      return <Loading/>
    }
  },[imgSelector])
  // getData가 store에서 관리되고 있기 때문에 필요 없음
  // useEffect(()=>{
  //   getData()
  // }, [])

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
          { CARD_LIST }
        </div>
      </div>
      {/* 공통 Footer UI부분 */}
      <CommonFooter/>
      { open && <DetailDialog data={imgData} handleDialog={setOpen}/>}
      
    </div>
  )
}

export default index