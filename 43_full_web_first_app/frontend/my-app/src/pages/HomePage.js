import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();



  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/getUsers");
      setUserData(response.data.data); // Setting user data properly
      console.log(response.data);
    } catch (err) {
      console.log(err.message); // Handling errors
    }
  };

  useEffect(() => {
    getData(); // Fetching data on component mount
  }, []);

  const clickHandler = () => {
    // Define functionality for the click handler here
    navigate("/addemployee")
  };

  return (
    <div className='bg-black w-screen h-screen'>
      <div className='text-white w-10/12 mx-auto items-center justify-center'>
        <div className='flex pt-10 justify-between'>
          <div>

            <h2 className='text-2xl font-bold'>Employees</h2>
            <p>This is a list of all employees.You can add new employees,edit or delete existing ones.</p>

          </div>
          <div>
            <button onClick={clickHandler} className='bg-blue-600 px-2 py-2 rounded-md hover:scale-105
            transition-all duration-200 font-semibold '>Add Employees</button>

          </div>

        </div>

        <div className='flex font-medium text-gray-400 justify-between mt-10 bg-gray-900 px-5 py-3 rounded-lg items-center'>

          <div>Name</div>
          <div>Email</div>
          <div>Title</div>
          <div>Role</div>


        </div>
      </div>




      <div>
        {userData.map((person) => {
          return (
            <div key={person._id} className='bg-blue-900 rounded-xl text-blue-200 flex  w-10/12 mx-auto items-center justify-between px-6 py-2 mt-2  border-white'>
              <div className='font-bold'>{person.name}</div>
              <div>{person.email}</div>
              <div>{person.title}</div>
              <div>{person.role}</div>
            </div>
          );
        })}

      </div>



    </div>
  )
}

export default HomePage