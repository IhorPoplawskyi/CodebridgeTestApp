import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface articles {
  source: {id: null | number, name: string}
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

interface response {
  status: string
  totalResults: number
  articles: articles[]
}

interface IinitialState {
  keywords: string
  isLoading: boolean
  resultsWithTitle: response | null
  resultsWithSummary: response | null
}

const initState: IinitialState = {
  keywords: '',
  isLoading: false,
  resultsWithTitle: null,
  resultsWithSummary: null,
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setKeywords(state, action: PayloadAction<string>) {
      state.keywords = action.payload
    },
    setResultsWithTitle(state, action: PayloadAction<response>) {
      state.resultsWithTitle = action.payload
    },
    setResultsWithSummary(state, action: PayloadAction<response>) {
      state.resultsWithSummary = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
  }
})

export const {
  setKeywords,
  setResultsWithTitle,
  setResultsWithSummary,
  setIsLoading,
} = stateSlice.actions
export default stateSlice.reducer