import React from 'react';
import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
import NavigationBar from './Components/Navbar';
import { BrowserRouter ,Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';


function App() {
  const user = false;
  return (
    <BrowserRouter>
      <NavigationBar user = {user} />
      <div>
        <Routes>
          
          <Route path='/' element={<Feed />} />
          <Route path='/login' element={user ? <Navigate to = "/" />: <Login/> } />
          
          <Route path='/feed' element={user ? <Feed/> : <Navigate to ="/login" />} />
          <Route path='/profile' element={user ? <Profile/> : <Navigate to ="/login" />} />

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
