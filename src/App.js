import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home";
import { useSelector } from "react-redux";
import MailComponent from "./Components/Mail/ComposeMail";
import About from "./Components/Pages/About";
import Inbox from "./Components/Mail/Inbox";

function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedin);
  
  return (
    <div className="App">
      <Header />
      <Routes>
       {!loggedIn && <Route path="/signup" element={<SignUp />} />}
       {!loggedIn && <Route path="/login" element={<Login />} />}
       {loggedIn && <Route path="/home" element={<Home />} />}
       {loggedIn && <Route path="/mail" element={<MailComponent />} />}
        <Route path="/about" element={<About/>}/>
       {loggedIn && <Route path="/inbox" element={<Inbox/>}/>}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
