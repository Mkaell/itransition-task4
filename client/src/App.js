import React from "react";
import 'materialize-css'
import './App.css';
import routes from './Routes/routes'
import useAuth from "./Hooks/authHook";
import {Context} from './context/Context'

function App() {

  const {token,login,logout,userId, ban} = useAuth()
  const isAuth = ((!!token) && !ban)
    
  return (
      <Context.Provider value={{login,logout,userId,token, isAuth, ban}}>
        <>
        {routes(isAuth)}
        </>
      </Context.Provider>
  );
}

export default App;
