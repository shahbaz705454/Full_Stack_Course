
import { useState } from 'react';
import './App.css';
import GalleryView from './component/GalleryView';
import Navbar from './component/Navbar';
import UploadFile from './component/UploadFile';


function App() {

  const [crossBtnStatus ,setCrossBtnStatus] = useState("false");
  console.log(crossBtnStatus)
  return (
    <div className="App relative flex flex-col h-[100vh]">
      <Navbar setCrossBtnStatus={setCrossBtnStatus}></Navbar>
      <GalleryView></GalleryView>
      {
        crossBtnStatus === "true"? <UploadFile setCrossBtnStatus={setCrossBtnStatus}/> :null
      }
      

      
     
    </div>
  );
}

export default App;
