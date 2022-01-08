import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Dashboard from 'pages/Dashboard';
import Contribution from 'pages/Contribution';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contribution" element={<Contribution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
