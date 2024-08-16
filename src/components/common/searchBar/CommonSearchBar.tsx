import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchState } from '@/recoil/atoms/searchState'
import styles from './CommonSearchBar.module.scss'


function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState)
  const [text, setText] = useState("")
  const onChange = (e) => {
    console.log(e.target.value)
    setText(e.target.value)
  }
  const handleKeyDown = (e: React.KeyboardEvent) =>{
    if(e.key === 'Enter'){
      if(text === ""){//빈 값 검색시 : default검색
        //useRecoilState(searchState)에 있는 default값을 가져오기 위해서 사용
        return setSearch('Korea')//디폴트값
      }
      else{
        return setSearch(text) //작성한 input value 값을 할당
      }
    }
  }
  const onSearch = () => {
    if(text === ""){//빈 값 검색시 : default검색
      //useRecoilState(searchState)에 있는 default값을 가져오기 위해서 사용
      return setSearch('Korea')//디폴트값
    }
    else{
      return setSearch(text) //작성한 input value 값을 할당
    }
  }
  return (
    <div className={styles.searchBar}>
        <div className={styles.searchBar__search}>
          <input type="text" placeholder='찾을 이미지를 검색하세요' onChange={onChange} onKeyDown={handleKeyDown} value={text} className={styles.searchBar__search__input} />
          <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch}/>
        </div>
    </div>
  )
}

export default CommonSearchBar