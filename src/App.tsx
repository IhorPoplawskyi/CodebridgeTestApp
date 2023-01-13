import { FC } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ArticlePage from './components/ArticlePage/ArticlePage';
import HomePage from './components/HomePage/HomePage';

const App: FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='home/*' element={<HomePage />}></Route>
        <Route path='article/:id' element={<ArticlePage />}></Route>
        <Route path="*" element={<Navigate to={'/home'} replace/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
