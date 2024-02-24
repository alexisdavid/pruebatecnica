import React, { useEffect, useState } from "react";
import { NavBar } from "../../Components/Navbar/index";
import Container from "react-bootstrap/Container";
import { useAppContext } from "../../Context/AppContext";
export const Layout = ({ children }) => {
  const {user} = useAppContext()
  const [isLogued,setIsLogued]=useState(false)
  const [userData,setUserData]=useState(null)
useEffect(() => {
  if (user!='tengo estado') {
    setUserData(user)
    setIsLogued(true)
  }
},[user])
  return (
    <>
      <NavBar logued={isLogued} userData={userData} />
      <Container>
        {children}
      </Container>
    </>
  );
};
