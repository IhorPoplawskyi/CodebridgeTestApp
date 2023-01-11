import { setIsLoading, setResultsWithSummary, setResultsWithTitle } from "./stateSlice";
import { AppDispatch } from "./store";

export const getInfoByTitles = (keywords: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(setIsLoading(true))
        const response = await fetch(`https://newsapi.org/v2/everything?qInTitle=${keywords}&apiKey=2f56e5870a3946f0b52d65f8e4c55b30`)
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
      const response = await fetch(`https://newsapi.org/v2/everything?q=${keywords}&apiKey=2f56e5870a3946f0b52d65f8e4c55b30`)
      const data = await response.json();
      dispatch(setResultsWithSummary(data))
      dispatch(setIsLoading(false))
  } catch (e) {
      console.log(e)
  }
}