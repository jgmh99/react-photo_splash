import { BrowserRouter, Routes, Route } from "react-router-dom"
//recoil
import { RecoilRoot } from "recoil"
//페이지 컴포넌트
import MainPage from '@pages/index/index'
//북마크 페이지
import BookMark from '@pages/bookmark/index'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element = {<MainPage/>}/>
          <Route path="/search/:id" element = {<MainPage/>}/>
          <Route path="/bookmark" element = {<BookMark/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App