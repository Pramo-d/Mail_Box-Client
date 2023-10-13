import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/navbar/Header";
import Signup from "./Components/auth/SignUp";
import Login from "./Components/auth/Login";
import ForgetPassword from "./Components/auth/ForgetPassword";
import Home from "./Components/pages/Home"
import About from "./Components/pages/About";
import Inbox from "./Components/mailbox/Inbox";
import OpenMails from "./Components/mailbox/OpenMails";
import DeletedMails from "./Components/mailbox/DeletedMails";
import Outbox from "./Components/mailbox/Outbox";
import OpenOutbox from "./Components/mailbox/OpenOutbox";

function App() {
  const isLoggedIn= useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
    <Header/>
    <Routes>
    {!isLoggedIn && <Route path="/signup" element={<Signup/>}/>}
   {!isLoggedIn && <Route path="/login" element={<Login/>}/>}   
   <Route path="/about" element={<About/>}/>
   {isLoggedIn && <Route path="/home" element={<Home/>}/> }
   {isLoggedIn && <Route path="/inbox" element={<Inbox/>}/>}
   {isLoggedIn && <Route path="/inbox/:id" element={<OpenMails/>}/>}
      {isLoggedIn && <Route path="/outbox" element={<Outbox/>}/>}
      {isLoggedIn && <Route path="/outbox/:id" element={<OpenOutbox/>}/>}
   {isLoggedIn && <Route path="/inbox/deletedMails/:id" element={<DeletedMails/>}/>}
   {!isLoggedIn && <Route path="/forgetpassword" element={<ForgetPassword/>}/>}
   {!isLoggedIn && <Route path='*' element={<Navigate to='/login'/>}/>}
   {isLoggedIn && <Route path='*' element={<Navigate to='/home'/>}/>}
    </Routes>
    </>
  )     
}

export default App;