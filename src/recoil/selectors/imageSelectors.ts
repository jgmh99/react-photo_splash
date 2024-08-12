import { selector } from "recoil";
import axios from "axios";
import { get } from "http";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = 'https://api.unsplash.com/search/photos'
const API_KEY = 'GLhsNZhR6mzcIpyGyruG1jBg8hkg4udR0TfGWNSyNr4'
const PER_PAGE = 30;

export const imageData = selector({
    key:"imageData",
    get: async({get}) =>{
        //로직 설정
        // const searchValue = 'Korea'
        const searchValue = get(searchState) //searchState에 있는 디폴트 값 나옴
        // const pageValue = 100
        const pageValue = get(pageState);//pageState에 있는 디폴트 값 나옴
        // API 호출
        try {
            const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`);
            console.log(res.data.results);

            return res
        } 
        catch (err) {
            console.log(err)
        }
    }
})