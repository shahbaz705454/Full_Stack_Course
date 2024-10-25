
import './App.css';
import Products from './components/products';
import NewProduct from './components/newproducts';

function App() {
  const products = [
    {
      id:'p1',
      title:"nirma",
      amount:200,
      Date:new Date(2021,11,2),
  
    },
    {
      id:'p2',
      title:'harpic',
      amount:120,
      Date:new Date(2025,2,23), 
     
    },
    {
      id:'p3',
      title:"Arial",
      amount:240,
      Date:new Date(2024,5,14),
      
    }
  ]
  return (
    <div className='app'>

     <NewProduct />
     <Products items={products}/>
     


    </div>
  );
}

export default App;
 