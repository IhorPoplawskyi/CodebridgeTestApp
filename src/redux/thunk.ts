import { setIsLoading, setResultsWithSummary, setResultsWithTitle } from "./stateSlice";
import { AppDispatch } from "./store";

export const getInfoByTitles = (keywords: string) => async (dispatch: AppDispatch) => {
    const arrayKeyWords = keywords.split(' ');
    let callString = 'https://api.spaceflightnewsapi.net/v3/articles?'
    arrayKeyWords.map(el => {
        return callString += `title_contains=${el}&`
    })
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(callString)
        const data = await response.json();
        dispatch(setResultsWithTitle(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}

export const getInfoBySummary = (keywords: string) => async (dispatch: AppDispatch) => {
  try {
      dispatch(setIsLoading(true))
      const response = await fetch(`https://newsapi.org/v2/everything?q=${keywords}&pageSize=6&apiKey=53fa8ff7cf6e46e7b1e6fa26cbc30f3b`)
      const data = await response.json();
      dispatch(setResultsWithSummary(data))
      dispatch(setIsLoading(false))
  } catch (e) {
      console.log(e)
  }
}