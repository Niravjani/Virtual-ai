import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import AIPlanner from "./Components/AIPlanner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/planner" element={<AIPlanner />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;