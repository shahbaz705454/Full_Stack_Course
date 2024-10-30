import { NavLink } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import { useState } from 'react';




function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  return (

    <div className="w-screen h-screen overflow-x-hidden bg-richblack-900 flex flex-col">

      <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>


      </Routes>
    
    </div>
  );
}

export default App;
