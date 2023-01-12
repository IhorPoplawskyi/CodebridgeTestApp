import React, { FC } from 'react'
import { setKeywords } from '../../redux/stateSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import './HomePage.scss'

const SeacrhBar: FC = () => {
  const dispatch = useAppDispatch();
  const keywords = useAppSelector(state => state.stateSlice.keywords);
  return (
    <form className='searchBar'>
      <label htmlFor='input'>Filter by keywords</label>
      <input
        value={keywords}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { dispatch(setKeywords(event.target.value)) }}
        id='input'
        type='text'
        placeholder='Enter keywords' />
    </form>
  )
}

export default SeacrhBar;