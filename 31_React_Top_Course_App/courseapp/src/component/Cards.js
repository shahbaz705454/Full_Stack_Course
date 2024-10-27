import { useState } from "react";
import Card from "./Card";
function Cards(props) {
    let courses = props.courses;
    // console.log(courses);
    const [likedCourses, setLikedCourses] = useState([]);
    let category =props.category;

    function getCourses() {
        if(category=="All"){
            let allCourses = [];
        // Iterate over each category in courses
        Object.values(courses).forEach(array=>{
              array.forEach(courseData=>{
                allCourses.push(courseData);
              })
        })
        return allCourses;
        }else{
            // mai sirf specific category ka data pass karunga
            return courses[category];
        }
        
       
    }
    // console.log(getCourses());
 


  
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
        {
            getCourses().map((course) => (
                <Card key={course.id} course={course} 
                likedCourses ={likedCourses}
                setLikedCourses={setLikedCourses}/>
            ))
        }
    </div>
    )
}

export default Cards;