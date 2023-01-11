import { Container } from '@mui/material'
import { FC, useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { getInfoBySummary, getInfoByTitles } from '../../redux/thunk'
import '../HomePage/HomePage.scss'
import Results from './Results'
import SeacrhBar from './SearchBar'


const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector(state => state.stateSlice.keywords)
  const results = useAppSelector(state => state.stateSlice.resultsWithTitle)
  const debouncedSearchTerm = useDebounce(keywords, 500);
  
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     dispatch(getInfoByTitles(debouncedSearchTerm))
  //     dispatch(getInfoBySummary(debouncedSearchTerm))
  //   }
  // }, [debouncedSearchTerm])
  return (
      <Container sx={{ background: '#FFFFFF', width: '80vw', height: '100vh', borderTop: '1px solid transparent'}}>
        <SeacrhBar />
        <Results />
      </Container>
  )
}

export default HomePage;