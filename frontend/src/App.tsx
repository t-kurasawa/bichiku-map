import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Dashboard from 'pages/Dashboard';
import Contribution from 'pages/Contribution';
import EvacuationCenter from 'pages/EvacuationCenter';
import FAQ from 'pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/evacuationcenter" element={<EvacuationCenter />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
