import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Request from '../../utils/http'
const request = new Request();
export const NavBar = ({userData,logued=false}) => {
  const logout=async() => {
    const response = await request.post('logout')
   
    if (response && response.statusCode === 200) {
      sessionStorage.clear();
      window.location.reload(true);
    }
  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
       
      <Container>
        <Navbar.Brand href="#home">{`Bienvenido ${logued?userData?.UserName:''}`}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           {!logued ? <Link to="/login" className="btn btn-default">Iniciar sesion</Link>
           :
            <span className="btn" onClick={logout}>cerrar sesión</span>}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}