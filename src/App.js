import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import { useSelector } from "react-redux";
import MailComponent from "./Components/Mail/ComposeMail";
function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedin);
  console.log(loggedIn);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mail" element={<MailComponent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
