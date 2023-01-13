import { Container } from '@mui/material'
import { FC, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { mergeResults, resetResults } from '../../redux/stateSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getInfoBySummary, getInfoByTitles } from '../../redux/thunk'
import '../HomePage/HomePage.scss'
import Preloader from '../Preloader/Preloader'
import LoadMore from './LoadMore'
import Results from './Results'
import SeacrhBar from './SearchBar'

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector(state => state.stateSlice.keywords)
  const isLoading = useAppSelector(state => state.stateSlice.isLoading)
  const page = useAppSelector(state => state.stateSlice.page)
  const resultsWithTitle = useAppSelector(state => state.stateSlice.resultsWithTitle)
  const resultsWithSummary = useAppSelector(state => state.stateSlice.resultsWithSummary)
  const mergedResults = useAppSelector(state => state.stateSlice.mergedResults)
  const debouncedSearchTerm = useDebounce(keywords, 1000);
  
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(resetResults())
      dispatch(getInfoByTitles(debouncedSearchTerm))
      dispatch(getInfoBySummary(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])
  useEffect(() => {
    if (resultsWithTitle !== null) dispatch(mergeResults(resultsWithTitle))
    if (resultsWithSummary !== null) dispatch(mergeResults(resultsWithSummary))
  }, [resultsWithTitle, resultsWithSummary])

  return (
    <Container sx={{ background: '#FFFFFF', width: '80vw', minHeight: '100vh', borderTop: '1px solid transparent' }}>
      <SeacrhBar />
      {isLoading && <Preloader />}
      {mergedResults && <Results />}
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {mergedResults && mergedResults.length >= page * 6 && <LoadMore />}
      </div>
    </Container>
  )
}

export default HomePage;