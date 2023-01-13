import { setArticle, setIsLoading, setResultsWithSummary, setResultsWithTitle } from "./stateSlice";
import { AppDispatch } from "./store";

export const getInfoByTitles = (keywords: string) => async (dispatch: AppDispatch) => {
    const arrayKeyWords = keywords.split(' ');
    let callString = `https://api.spaceflightnewsapi.net/v3/articles?_limit=1000&`
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
    const arrayKeyWords = keywords.split(' ');
    let callString = `https://api.spaceflightnewsapi.net/v3/articles?_limit=1000&`
    arrayKeyWords.map(el => {
        return callString += `summary_contains=${el}&`
    })
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(callString)
        const data = await response.json();
        dispatch(setResultsWithSummary(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}

export const getArticle = (id: string) => async (dispatch: AppDispatch) => {
    let callString = `https://api.spaceflightnewsapi.net/v3/articles/${id}`
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(callString)
        const data = await response.json();
        dispatch(setArticle(data))
        dispatch(setIsLoading(false))
    } catch (e) {
        console.log(e)
    }
}