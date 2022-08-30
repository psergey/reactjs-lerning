import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './nav';
import Battle from "./pages/Battle/Battle";
import Results from "./pages/Battle/Results";
import Home from './pages/Home/Home';
import Popular from "./pages/Popular/Popular";

function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="battle/results" element={<Results />} />
    </Routes>      
    </div>
  );
}

export default App;
