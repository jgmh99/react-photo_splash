// 검색값을 담당하는 상태값
import { atom } from "recoil";

export const searchState = atom<string>({
    key:"searchState",
    default : "korea"
})