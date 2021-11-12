import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage/AppointmentPage";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='/appointment' element={<AppointmentPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
