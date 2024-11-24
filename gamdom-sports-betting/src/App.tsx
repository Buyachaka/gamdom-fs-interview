import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SportsPage from "../Pages/Sports";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "../Pages/Login";


function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
