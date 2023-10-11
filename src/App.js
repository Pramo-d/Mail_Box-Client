import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
