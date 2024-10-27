import React from 'react'
import Card from './Card'
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";
import {useState} from 'react'

const Testimonial = (props) => {
    let review =props.reviews;

    const [index, setindex] = useState(0);


    function leftShifthandler(){
        if(index<=0){
            setindex(review.length-1);
        }else{
            setindex(index-1);
        }

    }
    function rightShifthandler (){
        if(index +1 >=review.length){
            setindex(0);
        }else{
            setindex(index+1);
        }
        console.log(index);
    }

    function surpriseHandler(){
        let randomindex =Math.floor(Math.random()*review.length);
        // console.log(randomindex);
        setindex(randomindex)

    }
    console.log(index);
  return (
    <div className=' bg-white w-[85vw] md:w-[700px] flex flex-col justify-center items-center mt-10 p-10
     transition-all  duration-500 hover:shadow-lg rounded-lg shadow-sm' >
       
        <Card review={review[index]}>

        </Card>


        <div className='flex justify-center items-center mx-auto text-3xl mt-8 font-bold text-violet-400' >
            <button onClick={leftShifthandler}
            className=' cursor-pointer hover:text-violet-500 hover:scale-150 transition-all duration-200'>
            <FiChevronLeft />
                
            </button>

            <button onClick={rightShifthandler}
            className=' ml-3 cursor-pointer hover:text-violet-500 hover:scale-150 transition-all duration-200'>
            <FiChevronRight />
            </button>
        </div>


        <div className=' mt-5'>
            <button onClick={surpriseHandler}
            className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 
             cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>

    </div>
  )
}

export default Testimonial