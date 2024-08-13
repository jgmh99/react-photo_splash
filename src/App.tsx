import { BrowserRouter, Routes, Route } from "react-router-dom"
//recoil
import { RecoilRoot } from "recoil"
//페이지 컴포넌트
import MainPage from '@pages/index/index'


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element = {<MainPage/>}/>
          <Route index path="/:id" element = {<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App