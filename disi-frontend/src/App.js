import { BrowserRouter as Router, Routes, Route, Routes as Switch} from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import RegisterUser from "./components/RegisterUser"
import Home from "./Home"

function App() {
  return (
    <Router>
        <Switch>
                <Route exact path="/register" element={<RegisterUser />}/>
                <Route exact path="/" element={<Home />}/>
            </Switch>
    </Router>
  );
}

export default App;
