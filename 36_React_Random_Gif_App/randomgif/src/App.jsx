import { useState } from 'react'
import Random from './component/Random'
import Tag from './component/Tag'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div > 

      <div className='bg-blue-500 shadow-white shadow-2xl mt-5 max-w-[800px] mx-auto flex justify-center py-4
      rounded-lg'>
        <h1 className='text-2xl text-white'>RANDOM GIFS</h1>

      </div>
      
      <Random/>
      <Tag/>







    </div>


  )
}

export default App
