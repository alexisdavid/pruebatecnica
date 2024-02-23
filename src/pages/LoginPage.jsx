import React, { useEffect, useState } from "react";
import { encryptString } from "../utils/encrypt";
import Request from "../utils/http";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
const request = new Request();

export const LoginPage = () => {
  let token = {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [mensaje, setmensaje] = useState("");
  const [login, setLogin] = useState(true);

  const handleLogin = async () => {
    const URL = login?'login':'register'
    let data = { email: email, password: password,name:text };
    const response = await request.post(URL, data);
    let userInfo;

    if (response && response.statusCode === 200) {
      
      token = {
        userId: response.result.id,
        UserName: response.result.name,
        email: response.result.email,
        token: response.result.token,
      };
      let datos = JSON.stringify(token);
      userInfo = encryptString(datos);
      window.sessionStorage.setItem("token", JSON.stringify(userInfo));
    } else {
      setmensaje(response.result.message);
    }
    if (login) {
      
      window.location.replace(`/feed`);
    }else{
      setLogin(true)
      setEmail('')
      setText('')
      setPassword('')
    }
  };

  useEffect(() => {
    const isAuth = window.sessionStorage.getItem("token");
    if (isAuth) {
      
     
      window.location.replace(`/feed`);
    }
  },[])

  return (
    <Container>
      <Row>
        <Col className="m-5 p-5">
          <Col className="text-center mb-4">
            <h2>{login?'Iniciar Sesión':'Registrarme'}</h2>
          </Col>
          { !login && 
              <FloatingLabel controlId="floatingInput" label="Nombre" className="mb-3" >
                <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="escribe tu nombre" style={{border: text==''?'1px solid red':''}}/>
              </FloatingLabel>
          }
          <FloatingLabel controlId="floatingInput" label="correo" className="mb-3">
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@correo.com" style={{border: email==''?'1px solid red':''}} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" style={{border: password==''?'1px solid red':''}}>
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
              <small className="text-info mt-2 btn" onClick={e=>setLogin(!login)}>{login?'No tienes cuenta? registrate':'ya tienes cuenta? inicia sesión'}</small>
              <div className="d-flex justify-content-end mt-5">
                <Button disabled={email==''||password==''} variant={'primary'} size={'lg'} onClick={handleLogin}>{login?'Iniciar sesión':'registrarme'}</Button>
              </div>
        </Col>
      </Row>
    </Container>
  );
};
