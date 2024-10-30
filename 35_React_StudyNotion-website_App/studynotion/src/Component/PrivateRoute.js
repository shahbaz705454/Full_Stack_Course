import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({isLoggedIn,children}) => {
    const Navigate = useNavigate();


    if(isLoggedIn){
        return children;
    }else{

        // return <Navigate to />
    }

}

export default PrivateRoute