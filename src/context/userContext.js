import { Action } from 'history';
import {createContext, useReducer, useState} from 'react'
export const userContext = createContext();



const userReducer=(state,action)=>{

    switch(action.type)
    {
    
        case "SET_USER":
            console.log("esult from dispatch",state)
        
    return {...state,user:action.payload}
        default:
            return state;
    }
    
    }


export const UserProvider =({children})=>{

    const[state,dispatch]=useReducer(userReducer,{user:null})



    


return(
<userContext.Provider value={{dispatch,...state}}>

    {children}
</userContext.Provider>


)



}