import { IArticle } from "../types";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface IinitialState {
  keywords: string
  isLoading: boolean

  page: number
  limit: number
  currentPriority: string

  articles: IArticle[] | null
  article: IArticle | null
}

const initialState: IinitialState = {
  keywords: "",
  currentPriority: '',
  isLoading: false,
  page: 1,
  limit: 6,
  articles: null,
  article: null,
};

const fetchArticles = createAsyncThunk(
  "stateSlice/fetchArticles",
  async (keywords: string, { dispatch }) => {
    
    // articlesAPI.getList(keywords, currentPriority);
    // call new func
    // return data;
    // const response = await userAPI.fetchById(userId);
    // return response.data;
  }
);

const stateSlice = createSlice({
  name: "stateSlice",
  initialState,
  reducers: {
    setKeywords(state, action: PayloadAction<string>) {
      state.keywords = action.payload;
      state.articles = [];
    },
    setArticles(state, action: PayloadAction<IArticle[]>) {
      state.articles = [...state.articles!, ...action.payload]
    },
    setArticle(state, action: PayloadAction<IArticle>) {
      state.article = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: ( builder ) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.isLoading = false;
    });
  }
});

export const {
  setKeywords,
  setIsLoading,
  setPage,
  setArticle,
} = stateSlice.actions;
export default stateSlice.reducer;
