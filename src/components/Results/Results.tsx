import { FC } from "react";
import cn from 'classnames';

import MuiDivider from '@mui/material/Divider';

import styles from './Results.module.scss';


interface ResultsProps {
  totalCount: number | null;
  className?: string;
}

export const Results: FC<ResultsProps> = ({ className, totalCount }): JSX.Element => (
  <div className={cn(className, styles.items)}>
    Results: {totalCount}
    <MuiDivider />
  </div>
);

