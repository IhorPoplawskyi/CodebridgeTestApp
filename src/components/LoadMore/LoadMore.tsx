import { FC } from "react";
import MuiButton from "@mui/material/Button";

// import { setPage } from "../../redux/stateSlice";
// import { useAppDispatch, useAppSelector } from "../../redux/store";

interface ILoadMoreProps {
  onClick?: () => void;
}

export const LoadMore: FC<ILoadMoreProps> = ({ onClick }): JSX.Element => {
  // const dispatch = useAppDispatch();
  // const page = useAppSelector((state) => state.stateSlice.page);

  return (
    <MuiButton
      sx={{ marginBottom: "15px" }}
      // onClick={() => dispatch(setPage(page + 1))}
      onClick={onClick}
      variant="outlined"
    >
      Load More
    </MuiButton>
  );
};
