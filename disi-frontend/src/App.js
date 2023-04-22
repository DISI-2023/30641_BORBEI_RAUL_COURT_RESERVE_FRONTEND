import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import LoginUser from './components/LoginUser';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import FieldPage from './pages/FieldPage';
import LocationPage from './pages/LocationPage';
import ViewAllLocationsPage from './pages/ViewAllLocationsPage';
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
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/field" element={<FieldPage />} />
        <Route exact path="/location" element={<LocationPage />} />
        <Route exact path="/loc" element={<ViewAllLocationsPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Switch>
    </Router>
    </LocalizationProvider>)
}

export default App;
