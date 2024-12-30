
import './App.css';
import HomePage from "./pages/HomePage";
import { Routes,Route } from 'react-router-dom';
import CreateEmployeePage from "./pages/CreateEmployeePage"

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/addemployee' element={<CreateEmployeePage></CreateEmployeePage>}></Route>
   </Routes>
   </>
  );
}

export default App;
