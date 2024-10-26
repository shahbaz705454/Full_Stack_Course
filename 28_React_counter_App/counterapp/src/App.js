import {useState} from "react";
import './App.css';

function App() {
  

  const [counter, setcount] = useState(0);

  function decHandler() {
    setcount(counter - 1);
    console.log(counter);

  }
  function incHandler() {
    setcount(counter + 1);
    console.log(counter);

  }

  function resetHandler() {
    setcount(0);
    console.log(counter)

  }


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
     
      <div className='text-[#0398d4] font-medium text-2xl'>Increment & Decrement</div>
      <div className="text-[#344151] flex justify-center gap-20 bg-white py-3 rounded-md text-[25px] ">

        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
          {counter}

        </div>

        <button onClick={incHandler} className="border-x-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +

        </button>


      </div>


      <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-md text-lg " >
        Reset
      </button>
      


    </div>
  );
}

export default App;
