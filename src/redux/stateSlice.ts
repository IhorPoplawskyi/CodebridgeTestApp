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
  resultsWithTitle: response[] | null
  resultsWithSummary: response[] | null
  mergedResults: response[] | null
  page: number
  article: response | null
}

const initState: IinitialState = {
  keywords: '',
  isLoading: false,
  resultsWithTitle: null,
  resultsWithSummary: null,
  mergedResults: null,
  page: 1,
  article: null,
}

const stateSlice = createSlice({
  name: 'stateSlice',
  initialState: initState,
  reducers: {
    setKeywords(state, action: PayloadAction<string>) {
      state.keywords = action.payload
    },
    setResultsWithTitle(state, action: PayloadAction<response[]>) {
      state.resultsWithTitle = action.payload
    },
    setResultsWithSummary(state, action: PayloadAction<response[]>) {
      state.resultsWithSummary = action.payload
    },
    setArticle(state, action: PayloadAction<response>) {
      state.article = action.payload
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    mergeResults(state, action: PayloadAction<response[]>) {
      state.mergedResults = [...state.mergedResults!,...action.payload].filter((el,index,array)=>array.findIndex(el2=>(el2.id===el.id))===index)
    },
    resetResults(state) {
      state.mergedResults = []
    },
  }
})

export const {
  setKeywords,
  setResultsWithTitle,
  setResultsWithSummary,
  setIsLoading,
  setPage,
  mergeResults,
  resetResults,
  setArticle,
} = stateSlice.actions
export default stateSlice.reducer