import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const {page,handlePageChange,totalPages} = useContext(AppContext);
  console.log("pagination")
  console.log(page);
  console.log(totalPages)

  return (
    <div className='w-full bg-slate-500 h-14 flex items-center justify-between px-40 overflow-y-hidden'>
      <div className='flex gap-5'>
      {
        page>1 && ( <button 
        className='border border-black px-5 py-2 rounded-lg bg-violet-400 shadow-lg text-white font-semibold'
        onClick={()=>handlePageChange(page-1)}>
          previous</button>)
       
      }

      {
        page <totalPages && (<button
          
          className='border border-black px-5 py-2 rounded-lg bg-violet-400 shadow-lg text-white font-semibold'
          onClick={()=>handlePageChange(page+1)}>Next</button>)
        
      }
      </div>


      <div>
        <p className='font-bold text-xl text-white '>{page} of {totalPages}</p>

      </div>
    </div>
  )
}

export default Pagination