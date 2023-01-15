import { FC, useCallback } from "react";
import MuiContainer from "@mui/material/Container";

import {
  fetchArticles,
  setPage,
  setSearchTerm,
  fetchTotalCount,
} from "../../redux/stateSlice";
import { useAppDispatch, useAppSelector } from "../../redux";

import { LoadMore, Preloader, Results, SearchBar, ArticleCard } from '../../components';

import styles from "./HomePage.module.scss";

export const HomePage: FC = (): JSX.Element => {;
  const dispatch = useAppDispatch();

  const searchTerm = useAppSelector((state) => state.stateSlice.searchTerm);
  const articles = useAppSelector((state) => state.stateSlice.articles);
  const totalCount = useAppSelector((state) => state.stateSlice.totalCount);
  const page = useAppSelector((state) => state.stateSlice.page);
  const status = useAppSelector((state) => state.stateSlice.status);

  const onSearchHandler = useCallback((value: string): void => {
    if (value && value === searchTerm) return;
    dispatch(setSearchTerm(value));
    dispatch(fetchTotalCount());
    dispatch(fetchArticles());
  }, [dispatch]);

  const loadMoreArticles = () => {
    dispatch(setPage(page + 1));
    dispatch(fetchArticles());
  }

  const showLoadMore = totalCount && totalCount > articles.length;

  return (
    <MuiContainer className={styles.wrapper}>
      <SearchBar
        value={searchTerm}
        label="Filter by keywords"
        onSearch={onSearchHandler}
      />

      <Results totalCount={totalCount} className={styles.results} />

      {articles && (
        <div className={styles.cardContainer}>
          {articles.map((el) => (
            <ArticleCard key={el.id} item={el} searchTerm={searchTerm} />
          ))}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        {showLoadMore && (
          <LoadMore onClick={loadMoreArticles} className={styles.loadMore} />
        )}
      </div>

      {status === 'loading' ? <Preloader className={styles.preloader} /> : null}
    </MuiContainer>
  );
};