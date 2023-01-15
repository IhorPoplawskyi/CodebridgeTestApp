import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticle } from '../types';
import { fetchArticle, fetchArticles, fetchTotalCount } from "./thunks";


interface IArticlesState {
  searchTerm: string;
  status: 'init' | 'loading' | 'success' | 'error';
  currentPriority: "title_contains" | "summary_contains";
  articles: IArticle[];
  totalCount: number | null;
  page: number;
  limit: number;
  activeArticle: IArticle | null;
}

const initState: IArticlesState = {
  searchTerm: "",
  status: 'init',
  currentPriority: "title_contains",
  articles: [],
  totalCount: null,
  page: 0,
  limit: 6,
  activeArticle: null,
};


const stateSlice = createSlice({
  name: "stateSlice",
  initialState: initState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.articles = [];
      state.currentPriority = "title_contains";
      state.page = 0;
    },
    setArticle(state, action: PayloadAction<IArticle>) {
      state.activeArticle = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCurrentPriority(state) {
      state.currentPriority = 'summary_contains'
    },
  },
    extraReducers: (builder) => {
      builder.addCase(fetchTotalCount.fulfilled, (state, action) => {
        state.totalCount = action.payload;
      });
      builder.addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = [...state.articles, ...action.payload];
        state.status = 'success';
      });
      builder.addCase(fetchArticles.rejected, (state) => {
        state.status = 'error';
      });
      builder.addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      });
      builder.addCase(fetchArticle.fulfilled, (state, action) => {
        state.activeArticle = action.payload;
        state.status = 'success';
      });
      builder.addCase(fetchArticle.rejected, (state) => {
        state.status = 'error';
      });
      builder.addCase(fetchArticle.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const {
  setSearchTerm,
  setPage,
  setArticle,
  setCurrentPriority,
} = stateSlice.actions;

export default stateSlice.reducer;
