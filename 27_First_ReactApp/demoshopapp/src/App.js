
import './App.css';
import './components/Productitem';
import Item from './components/Productitem';
import './components/itemDate';
import ItemDate from './components/itemDate';
import Cards from './components/cards';

function App() {
  const products = [
    {
      id:'p1',
      title:"nirma",
      amount:200,
      Date:new Date(2021,12,2),
  
    },
    {
      id:'p2',
      title:"harpic",
      amount:120,
      Date:new Date(2025,2,23),
     
    },
    {
      id:'p3',
      title:"Arial",
      amount:240,
      Date:new Date(2024,5,14),
      
    }
  ];
  return (
    <div>

      <products item={products}></products>


      <Cards>
      
      <Item name={resp[0].itemName} ></Item>
      <ItemDate day={resp[0].itemDate} month={resp[0].itemMonth} year={resp[0].itemYear}></ItemDate>

      <Item name={resp[1].itemName} ></Item>
      <ItemDate day={resp[1].itemDate} month={resp[1].itemMonth} year={resp[1].itemYear}></ItemDate>

      <Item name={resp[2].itemName} ></Item>
      <ItemDate day={resp[2].itemDate} month={resp[2].itemMonth} year={resp[2].itemYear}></ItemDate>
      
      
      <div className="App" > hello ji my name is shahbaz </div>

      </Cards>
    </div>
  );
}

export default App;
