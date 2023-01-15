import { Container } from "@mui/material";
import { FC, useEffect } from "react";

import useDebounce from "../../hooks/useDebounce";

// index.ts from ./redux, rename to "store"
import { useAppDispatch, useAppSelector } from "../../redux/store";

import { Preloader, LoadMore, Results, SearchBar } from "../../components";

import "./HomePage.module.scss";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const keywords = useAppSelector((state) => state.stateSlice.keywords);
  const page = useAppSelector((state) => state.stateSlice.page);
  const articles = useAppSelector((state) => state.stateSlice.articles);
  const isLoading = useAppSelector((state) => state.stateSlice.isLoading);
  
  // const debouncedSearchTerm = useDebounce(keywords, 1000);

  // useEffect(() => {
  //   if (!debouncedSearchTerm) return;

  //   dispatch(resetResults());
  //   dispatch(getInfoByTitles(debouncedSearchTerm));
  //   dispatch(getInfoBySummary(debouncedSearchTerm));
  // }, [debouncedSearchTerm]);

  const onChangeHandler = (searchString: string) => {
    if (!searchString.length) {
      //   dispatch(resetResults());
    } else {
      // dispatch (SetKeywords);
      // dispatch (fetchArticles);
      // createAsyncThunk === http call
    }
  }

  // a) change keywords => reset, + call (length)
  // b) load more => call, ++results



  return (
    <Container
      sx={{
        background: "#FFFFFF",
        width: "80vw",
        minHeight: "100vh",
        borderTop: "1px solid transparent",
      }}
    >
      <SearchBar onChange={onChangeHandler} />
      {isLoading && <Preloader />}
      {articles && <Results />}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LoadMore />
      </div>
    </Container>
  );
};
