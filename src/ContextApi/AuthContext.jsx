

import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'



export const AuthContext=createContext()


export const  AuthContextProviderComponent = ({children}) => {
 
       const [isAuth,setIsAuth]=useState(true);

      const toggleAuth=()=>{
           setIsAuth(!isAuth)
      }

  


     

       
      const value={isAuth,setIsAuth,toggleAuth}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

