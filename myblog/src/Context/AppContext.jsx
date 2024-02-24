import { createContext, useContext, useEffect, useState } from "react";
import {loadUser} from './UserData'
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user,setUser]= useState('tengo estado')


  async function getInfo(){
    let userParam = await loadUser();
    if (userParam) {
    
    
      setUser(userParam)
   
    }
   }
  useEffect(() => {
    getInfo()
   
  }, []);

 
  let data = {
    user:user
  }
  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};