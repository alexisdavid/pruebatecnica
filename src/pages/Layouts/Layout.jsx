import React from "react";
import { NavBar } from "../../Components/Navbar/index";
import Container from "react-bootstrap/Container";
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  );
};
