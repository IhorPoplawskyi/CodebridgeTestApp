import { FC } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ArticalPage from './components/ArticlePage/ArticalPage';
import HomePage from './components/HomePage/HomePage';
import { useAppSelector } from './redux/store';

const App: FC = () => {
  const result1 = useAppSelector(state => state.stateSlice.resultsWithTitle)
  const result2 = useAppSelector(state => state.stateSlice.resultsWithSummary)
  console.log(result1, result2)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='home/*' element={<HomePage />}></Route>
        <Route path='article/:id' element={<ArticalPage />}></Route>
        <Route path="*" element={<Navigate to={'/home'} replace/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
