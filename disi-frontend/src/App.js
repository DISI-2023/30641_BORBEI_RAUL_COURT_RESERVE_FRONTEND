import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar/>
    </Router>
  );
}

export default App;
