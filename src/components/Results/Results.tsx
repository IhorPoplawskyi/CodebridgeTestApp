import { FC } from "react";

import { ResultsStyle } from "./ResultsStyle";

import MuiDivider from '@mui/material/Divider';

import style from '../Results/Results.module.scss';

import { useAppSelector } from "../../redux/store";

import { ResultsCard } from "../ResultsCard/ResultsCard";

export const Results: FC = (): JSX.Element => {
  const articles = useAppSelector(state => state.stateSlice.articles);
  const page = useAppSelector((state) => state.stateSlice.page);

  return (
      <ResultsStyle>
        Results: {articles!.length}
        <MuiDivider />
        <div className={style.cardContainer}>
          {articles!.map((el) => (
            <ResultsCard key={el.id} item={el} />
          ))}
        </div>
      </ResultsStyle>
  );
};

