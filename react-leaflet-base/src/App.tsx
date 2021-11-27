import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
