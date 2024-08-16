import React, { useEffect, useState } from 'react'
import styles from './DetailDialog.module.scss'
import { CardDTO, Tag } from '@/pages/index/types/card'
import toast, { toastConfig } from 'react-simple-toasts'
import 'react-simple-toasts/dist/theme/dark.css'
toastConfig({theme : 'dark'})

interface Props{
  data : CardDTO,
  handleDialog:(e:boolean) => void
}

function DetailDialog({data, handleDialog} :Props) {
  const [bookMark, setBookMark] = useState(false)
  //다이얼로그 끄기
  const closeDialog = (e :any) => {
    handleDialog(false)
    // 이벤트 버블링 방지
  }
  //북마크 추가 이벤트
  const addBookMark = (select: CardDTO) =>{
    setBookMark(true);

    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))
    // 1. 로컬스토리지에 bookmark라는 데이터가 없을 경우
    if(!getLocalStorage || getLocalStorage === null){
      localStorage.setItem('bookmark', JSON.stringify([select]))
      toast('북마크 추가 완료!')
    }
    
    else{//2. 해당 이미지가 이미 localstorage에 담겨 있을경우
      if(getLocalStorage.findIndex((item :CardDTO)=>{return item.id === select.id}) > -1){
        toast('이미 북마크에 추가 되어있습니다.')
      }
      else{
        //3. 해당 이미지가 이미 localstorage - bookmark에 저장 X + bookmark라는 데이터에 이미 어떤 값이 담겨 있는 경우
        const res = [...getLocalStorage]
        res.push(select)
        localStorage.setItem('bookmark', JSON.stringify(res))
        toast('북마크 추가 완료!!!')
      }
    }
  }
  useEffect(()=>{
    const getLocalStorage = JSON.parse(localStorage.getItem('bookmark'))

    if(getLocalStorage && getLocalStorage.findIndex((item :CardDTO) => {return item.id === data.id}) > -1){
      setBookMark(true)
    }
    else if(!getLocalStorage){
      return
    }
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>

        <div className={styles.container__dialog__header}>
          <div className={styles.close}>
            <button className={styles.close__button} onClick={closeDialog}>
              {/* 구글 아이콘 사용할예정 */}
              <span className='material-symbols-outlined' style={{fontSize: 28 + 'px'}}>
                close
              </span>
            </button>
            <img src={data.user.profile_image.small} alt="작가사진" className={styles.close__authorImage}/>
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>

          <div className={styles.bookMark}>
            <button className={styles.bookMark__button} onClick={()=>addBookMark(data)}>
              {/* 구글 아이콘 사용 */}
              {bookMark === false ? 
              <span className='material-symbols-outlined' style={{fontSize: 16 + 'px'}}>
                favorite
              </span> : 
              <span className='material-symbols-outlined added' style={{fontSize: 16 + 'px', color : 'red'}}>
                favorite
              </span>
              }
              
            </button>
            <button className={styles.bookMark__button}>다운로드</button>
          </div>
        </div>

        <div className={styles.container__dialog__body}>
          <img src={data.urls.small} alt="상세이미지" className={styles.image}/>
        </div>

        <div className={styles.container__dialog__footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>이미지 크기</span>
              <span className={styles.infoBox__item__value}>{data.width} * {data.height}</span>
            </div>

            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>Upload</span>
              <span className={styles.infoBox__item__value}>{data.created_at.split('T')[0]}</span>
            </div>

            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>last update</span>
              <span className={styles.infoBox__item__value}>{data.updated_at.split('T')[0]}</span>
            </div>

            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item__label}>다운로드</span>
              <span className={styles.infoBox__item__value}>{data.likes}</span>
            </div>

          </div>

          <div className={styles.tagBox}>
            { 
              data.tags.map((tag:Tag)=>{
                return <div className={styles.tagBox__tag} key={tag.title}>{tag.title}</div>
              })
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailDialog