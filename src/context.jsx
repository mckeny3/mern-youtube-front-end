import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";


export const ThemeContext = createContext();
export const ContextProvider = ({children})=>{
/* const loca = useLocation();
 */    const[darkMode,setDarkMode]=useState(true)
    const locationPath = useLocation()
    const t=useLocation()
    return(

<ThemeContext.Provider value={{darkMode,setDarkMode,locationPath}}>

    {children}
</ThemeContext.Provider>

    )
}