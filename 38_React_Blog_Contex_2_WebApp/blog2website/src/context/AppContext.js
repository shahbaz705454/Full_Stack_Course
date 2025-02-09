import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { Navigate, useNavigate } from "react-router";

// creating and exporting context
export const AppContext = createContext();

// provider => send data to children function i.e App.js
export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();
  // data filling

  async function fetchBlogPosts(page = 1, tag= null, category) {
    setLoading(true);
    const url = `${baseUrl}?page=${page}`;

    if(tag){
        url += `&tag=${tag}`
    }
    if(category){
        url += `&category=${category}`
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPage(data.page);
      setTotalPages(data.totalPages);
      setPosts(data.posts);
    } catch (error) {
      console.trace(error);
      console.log(error);
      setPage(1);
      setTotalPages(null);
      setPosts([]);
    }

    setLoading(false);
  }

  function handlePageChange(page) {
    navigate({search : `?page=${page}`})
    setPage(page);
    // fetchBlogPosts(page);
  }

  // sending data
  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  // sending App.js the value in the AppContext
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}