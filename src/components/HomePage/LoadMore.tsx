import Button from '@mui/material/Button';
import { setPage } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

export default function LoadMore() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.stateSlice.page)

  return (
    <Button sx={{marginBottom:'15px'}} onClick={() => dispatch(setPage(page + 1))} variant="outlined">Load More</Button>
  );
}