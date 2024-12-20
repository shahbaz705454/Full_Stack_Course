import { useState } from "react";
import './App.css';
import Form from "./Form";

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [secondName, setSecondName] = useState("");

  // function changeFirstHandler(event) {
  //   // console.log("printing First Name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  //   console.log(firstName)
  // }
  // function changeSecondHandler(events) {
  //   // console.log("Printing Second Name");
  //   // console.log(event.target.value);
  //   setSecondName(events.target.value);
  //   // console.log(secondName)
  // }


  // const [formData, SetFormData] = useState(
  //   {
  //     firstName: "",
  //     secondName: "",
  //     email: "",
  //     comment: "",
  //     checkbox: false,
  //     mode: "Online-Mode",
  //     favCar: ""
  //   }

  // )
  // console.log(formData);

  // function changeHandler(event) {
  //   const { name, value, checked, type } = event.target
  //   SetFormData(preFormData => {
  //     return {
  //       ...preFormData,
  //       [name]: type === "checkbox" ? checked : value
  //     }
  //   });

  // }

  // function submitHandler(event) {
  //   event.preventDefault();
  //   console.log("submit pr Click hua hai")

  // }


  return (
    <div>
      <h1></h1>
      <Form></Form>





    </div>

  
  
  
  
    //   <div>
  //   <form className='form' onSubmit={submitHandler}>
  //     <input type='text' placeholder='First Name' onChange={changeHandler} name="firstName" />
  //     <br /><br />

  //     <input type='text' placeholder='Second Name' onChange={changeHandler} name="secondName" />
  //     <br /><br />

  //     <input type='email' placeholder='Email' onChange={changeHandler} name="email" />
  //     <br /><br />

  //     <textarea placeholder="Enter your Comments" onChange={changeHandler} name="comment" value={formData.comment}></textarea>
  //     <br /><br />

  //     {/* check box */}

  //     <input type='checkbox' onChange={changeHandler} name="checkbox" id="checkbox" checked={formData.checkbox} />
  //     <label htmlFor="checkbox">checkbox</label>
  //     <br /><br />

  //     <fieldset>
  //       <legend>Mode:</legend>
  //       <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode === "Online-Mode"} />
  //       <label htmlFor="Online-Mode"> Online-Mode</label>
  //       <br />

  //       <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode" checked={formData.mode === "Offline-Mode"} />
  //       <label htmlFor="Offline-Mode"> Offline-Mode</label>
  //     </fieldset>
  //     <br />

  //     <label>Tell me Your Car:</label>
  //     <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar}>
  //       <option value="">Select your car</option>
  //       <option value="scorpio"> Scorpio</option>
  //       <option value="Thor"> Thor</option>
  //       <option value="Kia"> Kia</option>
  //       <option value="Legender"> Legender</option>
  //       <option value="Defender"> Defender</option>
  //       <option value="Hero Honda"> Hero Honda</option>
  //       <option value="Splendor Plus"> Splendor Plus</option>
  //       <option value="Sonnet"> Sonnet</option>
  //       <option value="Mahindra"> Mahindra</option>
  //       <option value="Supra"> Supra</option>
  //       <option value="Mercedies"> Mercedies</option>
  //       <option value="Audi"> Audi</option>
  //       <option value="Mustang"> Mustang</option>
  //     </select>

  //     <br /><br />
  //     <button type="submit">Submit</button>
  //   </form>
  // </div>
);
  
}

export default App;
