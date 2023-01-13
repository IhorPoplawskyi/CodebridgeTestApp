import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface response {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
}

interface IinitialState {
  keywords: string
  isLoading: boolean
  resultsWithTitle: response[]
  resultsWithSummary: response[]
  page: number
}

const initState: IinitialState = {
  keywords: '',
  isLoading: false,
  resultsWithTitle: [],
  resultsWithSummary: [],
  page: 1
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setKeywords(state, action: PayloadAction<string>) {
      state.keywords = action.payload
    },
    setResultsWithTitle(state, action: PayloadAction<response[]>) {
      state.resultsWithTitle = [...state.resultsWithTitle,...action.payload]
    },
    setResultsWithSummary(state, action: PayloadAction<response[]>) {
      state.resultsWithSummary = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const {
  setKeywords,
  setResultsWithTitle,
  setResultsWithSummary,
  setIsLoading,
  setPage,
} = stateSlice.actions
export default stateSlice.reducer