import { FC } from 'react'
import { styled } from '@mui/material/styles';

const Results: FC = () => {
  
  const Results = styled('div')(({theme}) => ({
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
      <Results sx={{marginTop: '25px'}}>
        Results: 
        <div className='line'></div>
        
      </Results>
    </>
  )
}

export default Results;