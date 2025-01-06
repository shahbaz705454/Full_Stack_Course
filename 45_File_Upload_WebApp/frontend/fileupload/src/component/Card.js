import React from 'react'



const Card = ({item}) => {

  return (
    <div className='p-2 h-[25rem] m-5 border-2 border-black z-30'>
        <img src={item.imageUrl} alt="NoImage"  className='w-full h-full'></img>
       
    </div>
  )
}

export default Card