import { Container } from '@mui/material'
import { FC, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getInfoBySummary, getInfoByTitles } from '../../redux/thunk'
import '../HomePage/HomePage.scss'
import Preloader from '../Preloader/Preloader'
import Results from './Results'
import SeacrhBar from './SearchBar'


const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector(state => state.stateSlice.keywords)
  const isLoading = useAppSelector(state => state.stateSlice.isLoading)
  const resultsWithTitle = useAppSelector(state => state.stateSlice.resultsWithTitle)
  const res = useAppSelector(state => state.stateSlice.resultsWithSummary)
  const debouncedSearchTerm = useDebounce(keywords, 1000);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getInfoByTitles(debouncedSearchTerm))
      dispatch(getInfoBySummary(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])
  return (
      <Container sx={{ background: '#FFFFFF', width: '80vw', minHeight: '100vh', borderTop: '1px solid transparent'}}>
        <SeacrhBar />
        {isLoading && <Preloader />}
        {resultsWithTitle && <Results />}
      </Container>
  )
}

export default HomePage;