import React, { FC } from "react";

import MuiTextField from '@mui/material/TextField';

import { setKeywords } from "../../redux/stateSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

interface ISearchBarProps {
  searchString?: string;
  onChange?: (searchString: string) => void;
}

const StyledSearchBar = {
  marginTop: '20px',
  width: '40%',
  border: '1px solid rgb(219, 216, 216)',
  borderRadius: '3px',
}

export const SearchBar: FC<ISearchBarProps> = () => {
  
 
  const dispatch = useAppDispatch();
  const keywords = useAppSelector((state) => state.stateSlice.keywords);

  // <TextField / > + keywords as a prop

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // use useDebounce here, then call onChange prop

    dispatch(setKeywords(event.target.value));
  };


  return (
    <MuiTextField sx={StyledSearchBar}
      label="Filter by keywords"
      type="search"
      variant="standard"
    />
  );
};


