import { Container } from '@mui/material'
import { FC, useEffect, useRef } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { setPage } from '../../redux/stateSlice'
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
  const page = useAppSelector(state => state.stateSlice.page)
  const resultsWithTitle = useAppSelector(state => state.stateSlice.resultsWithTitle)
  const res = useAppSelector(state => state.stateSlice.resultsWithSummary)
  const debouncedSearchTerm = useDebounce(keywords, 1000);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElement = useRef<HTMLDivElement | null>(null)
  console.log(resultsWithTitle)

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getInfoByTitles(debouncedSearchTerm))
      dispatch(getInfoBySummary(debouncedSearchTerm))
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect()
    var callback = function (entries: any, observer: any) {
      if (entries[0].isIntersecting) {
        if (debouncedSearchTerm) {
          dispatch(setPage(page + 1))
          dispatch(getInfoByTitles(debouncedSearchTerm, page))
        }
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current!)
  }, [isLoading])
  return (
    <Container sx={{ background: '#FFFFFF', width: '80vw', minHeight: '100vh', borderTop: '1px solid transparent' }}>
      <SeacrhBar />
      {isLoading && <Preloader />}
      {resultsWithTitle && <Results />}
      <div ref={lastElement} style={{ height: '20px' }}></div>
    </Container>
  )
}

export default HomePage;