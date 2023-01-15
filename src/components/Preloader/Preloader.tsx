import { FC } from 'react'
import MuiBox from "@mui/material/Box";
import MuiCircularProgress from "@mui/material/CircularProgress";

export const Preloader: FC = (): JSX.Element => (
    <MuiBox sx={{ position: "absolute", left: "50%", top: "20%" }}>
      <MuiCircularProgress />
    </MuiBox>
);

