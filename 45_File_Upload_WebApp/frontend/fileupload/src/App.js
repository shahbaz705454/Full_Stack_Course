
import './App.css';
import GalleryView from './component/GalleryView';
import Navbar from './component/Navbar';
import UploadFile from './component/UploadFile';


function App() {
  return (
    <div className="App relative flex flex-col h-[100vh]">
      <Navbar></Navbar>
      <GalleryView></GalleryView>

      
     
    </div>
  );
}

export default App;
