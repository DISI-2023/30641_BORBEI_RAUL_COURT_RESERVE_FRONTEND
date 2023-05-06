import { BrowserRouter as Router, Route, Routes as Switch, Navigate } from 'react-router-dom';
import './App.css';
import RegisterUser from "./components/RegisterUser"
import LoginUser from './components/LoginUser';
import UserPage from './pages/UserPage';
import HomePage from "./pages/HomePage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigationBar from './components/NavigationBar';
import FieldsPage from './pages/FieldsPage';
import UserReservationsPage from './pages/UserReservationsPage';
import UserSubscriptionsPage from './pages/UserSubscriptionsPage';
import LocationsPage from './pages/LocationsPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/register" element={<RegisterUser />} />
          <Route exact path="/login" element={<LoginUser />} />
          <Route exact path="/user" element={localStorage.getItem("isAdmin") !== null && localStorage.getItem("isAdmin") === "false" ? <UserPage /> : <Navigate to="/" />} />
          <Route exact path="/reservations" element={localStorage.getItem("isAdmin") !== null && localStorage.getItem("isAdmin") === "false" ? <UserReservationsPage /> : <Navigate to="/" />} />
          <Route exact path="/subscriptions" element={localStorage.getItem("isAdmin") !== null && localStorage.getItem("isAdmin") === "false" ? <UserSubscriptionsPage /> : <Navigate to="/" />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/fields" element={<FieldsPage />} />
          <Route exact path="/locations" element={<LocationsPage />} />
        </Switch>
      </Router>
    </LocalizationProvider>)
}

export default App;
