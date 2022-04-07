import {createContext} from 'react'

function login(){}

function logout(){}

export const Context = createContext({
    token : null,
    userid:null,
    login:login,
    logout:logout,
    isAuth:false,
    isBanned:false,
    userEmail:null
})

console.log(Context.login)