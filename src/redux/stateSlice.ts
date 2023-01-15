import _sum from 'lodash/sum';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IArticle } from '../types';
import { RootState } from './store'
import ArticlesAPI from '../api/articles.api';
import { filtersByPriority } from '../constants';

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

export const fetchArticle = createAsyncThunk(
  "stateSlice/fetchArticle",
  async (id: string): Promise<IArticle> => {
    const article = ArticlesAPI.getItem(id)
    return article;
  }
)

export const fetchTotalCount = createAsyncThunk(
  "stateSlice/fetchTotalCount",
  async (_args, thunkAPI): Promise<number> => {
    const state = thunkAPI.getState() as RootState;
    const keywords =  state.stateSlice.searchTerm;

    const counts = await Promise.all(filtersByPriority
      .map(filter => ArticlesAPI.getTotalCount(filter, keywords)));
    
    return _sum(counts);
});

export const fetchArticles = createAsyncThunk(
  "stateSlice/fetchArticles",
  async (_args, thunkAPI): Promise<IArticle[]> => {
    const state = thunkAPI.getState() as RootState;
    const { searchTerm, currentPriority, page, limit } = state.stateSlice;

    const newArticles = await ArticlesAPI.getList(currentPriority, searchTerm, {
      page,
      limit,
    });

    if (newArticles && newArticles.length < limit + 1) {
      thunkAPI.dispatch(setCurrentPriority())
      thunkAPI.dispatch(setPage(0))
    }

    // TODO: add check
    // Netflix (7, 5 / 2)

    // newArticles.length < limit + 1 

    return newArticles;
  });

const stateSlice = createSlice({
  name: "stateSlice",
  initialState: initState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.articles = [];
      state.currentPriority = "title_contains";
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
  setCurrentPriority
} = stateSlice.actions;

export default stateSlice.reducer;
