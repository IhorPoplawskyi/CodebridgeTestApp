import { FC } from 'react'
import { styled } from '@mui/material/styles';
import ResultsCard from './ResultsCard';
import { useAppSelector } from '../../redux/store';

const Results: FC = () => {
  const articlesWithTitles = useAppSelector(state => state.stateSlice.resultsWithTitle?.articles)
  const articlesWithSummary = useAppSelector(state => state.stateSlice.resultsWithSummary?.articles);

  const Results = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 150px)', marginLeft: '75px', marginRight: '75px'
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 150px)', marginLeft: '75px', marginRight: '75px'
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 150px)', marginLeft: '75px', marginRight: '75px'
    },
  }))
  return (
    <>
      <Results sx={{ marginTop: '25px' }}>
        Results: {articlesWithTitles !== undefined && articlesWithSummary !== undefined ? articlesWithSummary.length + articlesWithTitles.length : 0}
        <div className='line'></div>
        <div className='cardContainer'>
          {articlesWithTitles?.map(el => <ResultsCard  {...el}/>)}
          {/* {articlesWithSummary?.map(el => <ResultsCard  {...el}/>)} */}
        </div>
      </Results>
    </>
  )
}

export default Results;