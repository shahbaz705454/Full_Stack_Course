
import './App.css';
import Navbar from './component/Navbar';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <div>

        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/Cart' element={<Cart/>}/>

      </Routes>


    </div>
  );
}

export default App;
