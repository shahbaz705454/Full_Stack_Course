import React from 'react';
function Filter(props){
    let filterdata = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;
    
    function filterHandler(title ){
        setCategory(title);
    }


    
    return (
        <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center items-center '>
            {
                filterdata.map((data)=>{
                    return <button 
                  
                    className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-bgDark hover:bg-opacity-50 
                    transition-all duration-300
                    ${category === data.title ? "bg-opacity-60 border-white border-2" : 
                        "bg-opacity-40 border-transparent"}
                    }
                    `}
                    key={data.id}
                    onClick={()=>filterHandler(data.title)} >
                        {data.title}  

                    </button>
                })
            }
        </div>
       
    )
}
export default Filter;