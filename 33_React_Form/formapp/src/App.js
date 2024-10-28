import { useState } from "react";
import './App.css';
import Form from "./Form";

function App() {

  // const [firstName,setFirstName] = useState("");
  // const [secondName,setSecondName] = useState("");

  // function changeFirstHandler(event){
  //   // console.log("printing First Name")
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value)
  //   console.log(firstName)
  // }
  // function changeSecondHandler(events){
  //   // console.log("Printing Second Name");
  //   // console.log(event.target.value);
  //   setSecondName(events.target.value);
  //   // console.log(secondName)
  // }


//   const [formData, SetFormData] = useState(
//     {
//       firstName: "",
//       secondName: "",
//       email: "",
//       comment: "",
//       checkbox: true,
//       mode: "Online-Mode",
//       favCar: ""
//     }

//   )
//   console.log(formData);

//   function changeHandler(event) {
//     const { name, value, checked, type } = event.target
//     SetFormData(preFormData => {
//       return {
//         ...preFormData,
//         [name]: type === "checkbox" ? checked : value
//       }
//     });

//   }

// function submitHandler(event){
//   event.preventDefault();
//   console.log("submit pr Click hua hai")

// }


  return (
    <div>

      <Form></Form>


    </div>



  //   <div className='app'>
  //     <form className='form' onSubmit={submitHandler}>
  //       <input type='text' placeholder='First Name' onChange={changeHandler} name="firstName" ></input>

  //       <br></br><br></br>

  //       <input type='text' placeholder='Second Name' onChange={changeHandler} name="secondName" ></input>
  //       <br /><br />
  //       <input type='email' placeholder='Email' onChange={changeHandler} name="email" ></input>

  //       {/* TEXT AREA */}

  //       <br /><br />
  //       <textarea placeholder="Enter your Comments" onChange={changeHandler} name="comment" value={formData.comment}></textarea>

  //       {/* CHECK BOX */}

  //       <br /><br />
  //       <input type='checkbox' placeholder='Email' onChange={changeHandler} name="checkbox" id="checkbox" checked={formData.checkbox} />
  //       <label htmlFor="checkbox">checkbox</label>

  //       <br /><br />

  //       {/* RADIO BUTTON */}
  //       <fieldset>
  //         <legend>Mode : </legend>

  //         <input type="radio" onChange={changeHandler} name="mode" value="Online-Mode" id="Online-Mode" checked={formData.mode === "Online-Mode"}></input>
  //         <label htmlFor="Online-Mode"> Online-Mode</label>
  //         <br></br>

  //         <input type="radio" onChange={changeHandler} name="mode" value="Offline-Mode" id="Offline-Mode" checked={formData.mode === "Offline-Mode"}></input>
  //         <label htmlFor="Offline-Mode"> Offline-Mode</label>
  //       </fieldset>
  //       <br></br>

  //       {/* DROP DOWN */}

  //       <label>Tell me Your Car </label>
  //       <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar} >

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

  //       </select>

  //       {/* Button */}

  //       <br/><br/>


  //       {/* <input type='submit' value='submit'/>  */}


  //       <button >Submit</button>


  //       {/* Button */}

       




  );
}

export default App;
