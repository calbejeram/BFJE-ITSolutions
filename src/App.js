import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Services from './assets/pages/Services';
import About from './assets/pages/About';
import Contacts from './assets/pages/Contacts';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
        </Routes>
    </Router>
    </>
  );
};

export default App;
