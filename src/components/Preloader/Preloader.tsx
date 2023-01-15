import { FC } from 'react';
import cn from 'classnames';

import MuiBox from "@mui/material/Box";
import MuiCircularProgress from "@mui/material/CircularProgress";

import styles from './Preloader.module.scss';

interface PreloaderProps {
  className?: string;
}

export const Preloader: FC<PreloaderProps> = ({ className }): JSX.Element => (
  <MuiBox className={cn(styles.box, className)}>
    <MuiCircularProgress />
  </MuiBox>
);
