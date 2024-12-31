
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './component/Card';
import CreateTodo from './component/createTodo';
import axios from 'axios';


function App() {

  const [todoData, setTodoData] = useState([]);

  const getData = async () => {


    try {

      const response = await axios.get("http://localhost:7000/api/v1/getTodos");
      setTodoData(response.data.data);
      



    } catch (err) {

      console.log("error ehile fetching data");
      console.log(err.message);

    }



  }
  // console.log(todoData.data[0].title);

  useEffect(() => {
    getData();

  }, [])
  const ref = useRef(null);


  return (
    <div  className="overflow-hidden flex relative justify-center items-center bg-slate-900 h-fit min-h-[100vh] w-screen">
      <div className='absolute font-bold text-[10rem] z-10 text-yellow-100 opacity-10'>TODO</div>
      <div ref={ref} className='z-20 flex-wrap  border-white w-9/12 h-full flex m-5 ml-0 mr-0 rounded-lg'>
      {todoData.map((todo, index) => (
          <Card key={index} Data={todo} refrence={ref}  refreshTodos = {getData}/>
        ))}
       </div>

      <div className=' z-20 shadow-emerald-400 shadow-md  border-white w-3/12 h-fit ml-4 m-4 rounded-lg'>
        <CreateTodo refreshTodos = {getData} refrence={ref}></CreateTodo>
      </div>

    </div>
  );
}

export default App;
