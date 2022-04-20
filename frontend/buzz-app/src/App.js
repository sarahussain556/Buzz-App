import React, {useEffect, useState} from 'react';
import Login from './Pages/Login';
import Feed from './Pages/Feed';
import Profile from './Pages/Profile';
import NavigationBar from './Components/Navbar';
import { BrowserRouter ,Routes, Route, Link, Navigate } from "react-router-dom";
import './App.css';


function App() {
  const [user,setUser] = useState(null);

  useEffect(()=> {
    const getUser =  ()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method: "GET",
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credential": true,
        },
      }).then(response => {
        if(response.status === 200 ) return response.json();
        throw new Error("authentication has been failed!")
      }).then(resObject =>{
        setUser(resObject.user)
      }).catch(err => {
        console.log(err);
      })
    };
    getUser();
  },[]);
  console.log(user)
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
