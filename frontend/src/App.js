import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardGridLayout from './page-components/DashboardGridLayout';
import PageHeader from './page-components/PageHeader';

function App() {
  return (
    <div>
      <BrowserRouter>
        <PageHeader/>
        <Routes>
          <Route path="/" element={<DashboardGridLayout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
