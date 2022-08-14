import React, { Children } from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const ThemeContext=createContext()

export const ThemeProviderComponent = ({children}) => {
  
    const [theme,setTheme]=useState(false);


    const ToggleTheme=()=>{
        setTheme(!theme)
    }

   const value={ToggleTheme,theme,setTheme}
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   
}
