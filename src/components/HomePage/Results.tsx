import { FC } from 'react'
import { styled } from '@mui/material/styles';
import ResultsCard from './ResultsCard';
import { useAppSelector } from '../../redux/store';

const Results: FC = () => {
  const mergedResults = useAppSelector(state => state.stateSlice.mergedResults);
  const page = useAppSelector(state => state.stateSlice.page);
  let mergedResultsSlice = mergedResults!.slice(0, page * 6)

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
        Results: {mergedResults!.length}
        <div className='line'></div>
        <div className='cardContainer'>
          {mergedResultsSlice.map(el => <ResultsCard key={el.id} {...el}/>)}
        </div>
      </Results>
    </>
  )
}

export default Results;