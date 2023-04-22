import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import LoginUser from './components/LoginUser';
import UserPage from './pages/UserPage';
import HomePage from "./pages/HomePage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Switch>
          <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/user" element={<UserPage />} />
          <Route exact path="/" element={<HomePage />} />
        </Switch>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
