//페이지 상태값을 담당하는 state

import { atom } from "recoil";

export const pageState = atom<number>({
    key: 'pageState',
    default : 1,
})