import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './components/pages/Skills';
import About from './components/pages/About';
import Personal from './components/pages/Personal';
import Uni from './components/pages/Uni';
import KhaanBank from './components/pages/KhaanBank';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/khaan" element={<KhaanBank />}></Route>
        <Route path="/AD" element={<Personal />}></Route>
        <Route path="/Uni" element={<Uni />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
