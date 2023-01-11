import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface response {
  id: number
  title: string
  url: string
  imageUrl: string
  summary: string
  publishedAt: string
  updatedAt: string
  featured: boolean
}

interface IinitialState {
  keywords: string
  isLoading: boolean
  resultsWithTitle: response[]
  resultsWithSummary: response[]
}

export const initState: IinitialState = {
  keywords: '',
  isLoading: false,
  resultsWithTitle: [],
  resultsWithSummary: [],
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
    // getCurrentWeather(state, action: PayloadAction<ICurrentWeather>) {
    //   state.currentWeather = action.payload
    // },
    // getFiveDaysForecast(state, action: PayloadAction<IFiveDaysForecast>) {
    //   state.fiveDaysForecast = action.payload
    // },
    // setForecastByDays(state, action: PayloadAction<IListItem[][]>) {
    //   state.forecastByDays = action.payload
    // },
    // setDetailForecast(state, action: PayloadAction<IListItem[]>) {
    //   state.detailForecast = action.payload
    // },
    // setActiveDetail(state, action: PayloadAction<number>) {
    //   state.selectedDetail = action.payload
    // },
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