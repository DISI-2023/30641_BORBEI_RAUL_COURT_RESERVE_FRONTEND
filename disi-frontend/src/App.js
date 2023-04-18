import { BrowserRouter as Router, Routes, Route, Routes as Switch} from 'react-router-dom';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import LoginUser from './components/LoginUser';
import UserPage from './pages/UserPage';
import Home from "./Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" element={<RegisterUser />}/>
        <Route exact path="/login" element={<LoginUser />}/>
        <Route exact path="/user" element={<UserPage />}/>
        <Route exact path="/" element={<Home />}/>
      </Switch>
    </Router>
  );
}

export default App;
