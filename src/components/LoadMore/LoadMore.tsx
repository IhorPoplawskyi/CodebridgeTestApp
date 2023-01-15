import { FC } from 'react';
import cn from 'classnames';

import MuiButton from "@mui/material/Button";

import styles from './LoadMore.module.scss';

interface LoadMoreProps {
  onClick: () => void;
  className?: string;
}

export const LoadMore: FC<LoadMoreProps> = ({ onClick, className }): JSX.Element => (
    <MuiButton
      className={cn(styles.loadMore, className)}
      variant="outlined"
      onClick={onClick}
    >
      Load More
    </MuiButton>
  );
