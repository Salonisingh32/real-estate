import{ BrowserRouter, Route, Routes   } from 'react-router-dom'
// import SignIn from './pages/signin'
 import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import React from 'react';
export default function App() {
  
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
    
  
}

   