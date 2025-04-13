import { createContext, useContext, useState } from "react"

let AuthContext=createContext(null)

export const AuthProvider = ({children})=>{

    let [condata,setCondata]=useState({
        isLoggedIn:false,
        currentUserName:null,
        currentUserId:null,
    })
// console.log('Data from Usecontext',condata);
    return <AuthContext.Provider value={{condata,setCondata}}>
        {children}
    </AuthContext.Provider>
}

//useAuth
export const useAuth =()=>{
    return useContext(AuthContext)
}