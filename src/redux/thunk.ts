import {
  setArticle,
  setIsLoading,
} from "./stateSlice";
import { AppDispatch } from "./store";


// 1. search (debounce, SearchBar) 
// 2. from HomePage (setKeywords) => asyncThunk (http call)
/* 3. http call '', limit = 6
    - title_contains
    - summary_contains
*/

/*
"NASA"
  - limit 6
  - page 1

  - 8 title (pr 1)
  - 12 summary (pr 2)

  1) call "title" 6
    1.1 results = [...results, +6 new] ?  results.length === limit * page ? noop() : 
    1.2 


    resul


*/


// move to helpers
const getQueryParams = (keywords: string, param: string) =>
  keywords
    .split(" ")
    .map((keyword) => `${param}=${keyword}`)
    .join("&");
  

export const getArticles = ({ items = [], options = { limit: 6, page: 1 } }) => {
  // const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles";
  const priorities = ["title_contains", "summary_contains"];

  // apiUrl + getQueryParams(keywords, priorities[0])
  // fetch(apiUrlcallString);
} 

// 0. set currentPriority = 0
// 1. get 6 items (fetch apiUrl + getQueryParams(keywords, currentPriority))
// 2. save to articles array (articles = [...articles, newItems])
// 3. check "articles.length < limit * page" , change currentPriority (+1), and +1 http call

export const getInfoByTitles =
  (keywords: string) => async (dispatch: AppDispatch) => {
    const arrayKeyWords = keywords.split(" ");
    let callString = `https://api.spaceflightnewsapi.net/v3/articles?_limit=1000&`;
    arrayKeyWords.map((el) => {
      return (callString += `title_contains=${el}&`);
    });

    try {
      dispatch(setIsLoading(true));
      const response = await fetch(callString);
      const data = await response.json();
      dispatch(setIsLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

export const getInfoBySummary =
  (keywords: string) => async (dispatch: AppDispatch) => {
    const arrayKeyWords = keywords.split(" ");
    let callString = `https://api.spaceflightnewsapi.net/v3/articles?_limit=1000&`;
    arrayKeyWords.map((el) => {
      return (callString += `summary_contains=${el}&`);
    });
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(callString);
      const data = await response.json();
      dispatch(setIsLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

export const getArticle = (id: string) => async (dispatch: AppDispatch) => {
  let callString = `https://api.spaceflightnewsapi.net/v3/articles/${id}`;
  try {
    dispatch(setIsLoading(true));
    const response = await fetch(callString);
    const data = await response.json();
    dispatch(setArticle(data));
    dispatch(setIsLoading(false));
  } catch (e) {
    console.log(e);
  }
};
