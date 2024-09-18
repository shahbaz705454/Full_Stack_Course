
import './App.css';
import Item from './components/Item';
import Date from './components/Date';
import Card from './components/Card';

function App() {
  const response =[
    {
      itemName: "Nirma",
      itemDay: "20",
      itemMonth: "june",
      itemYear: "2000",
    },

    {
      itemName: "EasyWash",
      itemDay: "23",
      itemMonth: "aug",
      itemYear: "2003",

    }

  ]
  return (
    <div>
      <Card>
      <Item name='surfExcel'></Item>
      <Date day="20" month ="jan" year ="2020"></Date>

      <Item name={response[0].itemName}></Item>
      <Date day={response[0].itemDay} month ={response[0].itemMonth} year ={response[0].itemYear}></Date>

      <Item name={response[1].itemName}>Hello ji item is here </Item>
      <Date day={response[1].itemDay} month ={response[1].itemMonth} year ={response[1].itemYear}></Date>

      <div className="App">Hello Shahbaz</div>

      </Card>


    </div>
    
  );
}

export default App;
 