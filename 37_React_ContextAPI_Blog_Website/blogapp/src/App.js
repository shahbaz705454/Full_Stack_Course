
import './App.css';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination'; 
import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const { fetchBlogsPosts } = useContext(AppContext);


  useEffect(()=>{
    fetchBlogsPosts();
  },[]);



  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
     
    </div>
  );
}

export default App;
