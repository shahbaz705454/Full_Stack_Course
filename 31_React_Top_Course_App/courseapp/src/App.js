import React from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { apiUrl, filterData } from "./data"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";
import Card from "./component/Card";

const App = () => {

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);




  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // console.log(data)
      setCourse(output.data);

    } catch (error) {

      toast.error("Something Went Wrong");



    }
    setLoading(false);
  }
  // fetchData();


  useEffect(() => {
    fetchData();
  }, []);






  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />

    <div className="bg-bgDark2 min-h-[100vh]">
    <Filter filterData={filterData} 
    category={category}
    setCategory ={setCategory}/>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
      {loading ? (<Spinner /> ): (<Cards courses={course} category={category} />)}
    </div>

    </div>
   
  </div>
);

};



export default App;
