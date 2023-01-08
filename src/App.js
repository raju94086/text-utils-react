import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} />
      {/* <Router> */}

      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
        </Routes>
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </Router>
    </>
  );
}
export default App;