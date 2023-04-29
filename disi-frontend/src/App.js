import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import LoginUser from './components/LoginUser';
import UserPage from './pages/UserPage';
import HomePage from "./pages/HomePage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationBar from './components/NavigationBar';
import FieldsPage from './pages/FieldsPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/user" element={<UserPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/fields" element={<FieldsPage />} />
        </Switch>
      </Router>
    </LocalizationProvider>)
}

export default App;
