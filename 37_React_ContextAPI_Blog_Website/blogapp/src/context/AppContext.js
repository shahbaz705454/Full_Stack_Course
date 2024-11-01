import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl"



export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //    Data filling here

    async function fetchBlogsPosts(Page =1) {

        setLoading(true);

        let url = `${baseUrl}?page=${Page}`;

        // console.log(url)

        try {
            const results = await fetch(url);
            const data = await results.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPages(data.totalPages);
            
            
        } catch (err) {
            console.log("Error Aya hai");
            setPage(1);
            setPost([]);
            setTotalPages(null);
            
        }
        setLoading(false);

    }

    function handlePageChange(newpage) {
        setPage(newpage);
        fetchBlogsPosts(newpage);


    }
 






    // Data senting here

    const value = {
        posts,
        setPost,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogsPosts
    };

    return <AppContext.Provider value={value}>{children}
    </AppContext.Provider>
}

