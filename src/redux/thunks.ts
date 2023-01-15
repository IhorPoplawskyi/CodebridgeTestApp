import _sum from 'lodash/sum';
import { createAsyncThunk } from "@reduxjs/toolkit";
import ArticlesAPI from '../api/articles.api';
import { IArticle } from "../types";
import { RootState } from "./store";
import { setCurrentPriority, setCurrentResponse,setPage } from './stateSlice';
import { filtersByPriority } from '../constants';

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

    let newArticles = await ArticlesAPI.getList(currentPriority, searchTerm, {
      page,
      limit,
    });
    thunkAPI.dispatch(setCurrentResponse(newArticles))

    if (newArticles.length < limit && currentPriority === 'title_contains') {
      thunkAPI.dispatch(setCurrentPriority())
      const nextPriority = filtersByPriority[1];
      const nextArticles = await ArticlesAPI.getList(nextPriority, searchTerm, {
        page: 0,
        limit: limit - newArticles.length,
      });
      newArticles = [...newArticles, ...nextArticles];
      thunkAPI.dispatch(setPage(0))
    }

    return newArticles;
  });