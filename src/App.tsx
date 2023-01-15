import { FC } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import { ArticlePage, HomePage } from "./pages";

const App: FC = (): JSX.Element => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="home/*" element={<HomePage />} />
          <Route path="article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to={"/home"} replace />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
