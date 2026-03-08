import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Strategy from './pages/Strategy';
import Discovery from './pages/Discovery';
import SWOT from './pages/SWOT';
import Stakeholders from './pages/Stakeholders';

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 font-sans text-slate-800">
        <Sidebar />
        <main className="flex-1 w-full md:ml-64 p-4 md:p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/swot" element={<SWOT />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
