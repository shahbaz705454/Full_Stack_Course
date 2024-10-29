
import './App.css';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom'
import Support from './components/support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Home from './components/Home';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <NavLink className="nav" to='/'>Home </NavLink>
        <NavLink to='/support'>Support</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/labs'>Labs</NavLink>

      </nav> 
      
      <Routes>
        <Route path='/' element={<MainHeader/>}>
        {/* DEfault Route */}
       <Route index element={<Home></Home>}/>
       <Route path='/support' element={<Support></Support>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/labs' element={<Labs/>}/>
       <Route path='*' element={<NotFound/>}/>

       </Route>


      


      </Routes> 


    </div>
  );
}

export default App;
