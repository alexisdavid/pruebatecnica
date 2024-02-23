import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ImagePicker } from "../ImagePicker/ImagePicker";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Request from '../../utils/http'
const request = new Request()
function MyVerticallyCenteredModal(props) {
    const [image, setImage] = useState(null);
    const [post,setPost] = useState({
        titulo:'',
        autor:'',
        contenido:''
    });

    const handleImageUpload = async() => {
        if (image) {
            let data={
                data: image,
                titulo:post.titulo,
                autor:post.autor,
                contenido:post.contenido
            }
            console.log("🚀 ~ handleImageUpload ~ data:", data)
        //   const response = await request.post('posts/savePost', data)
        //   if (response.statusCode === 200) {
        //     alert('Guardado con exito')
        //   }
        }
      };

      const handleClose = () => {
        handleImageUpload()
        // props.onHide()
      }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Agregar entrada</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ImagePicker  {...{image,setImage}}/>
          </Col>
          <Col>
            <label htmlFor="title">Titulo de entrada</label>
            <input value={post.titulo} onChange={e=>setPost({...post,titulo:e.target.value})} type="text" id="title" className="form-control" />
            <label htmlFor="Autor">Autor</label>
            <input value={post.autor} onChange={e=>setPost({...post,autor:e.target.value})} type="text" id="Autor" className="form-control" />
            <label htmlFor="Contenido">Contenido</label>
            <textarea value={post.contenido} onChange={e=>setPost({...post,contenido:e.target.value})} rows={10} id="Contenido" className="form-control" />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Guardar entrada</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const ModalComponent = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-end">
        <Button
          variant="info"
          className="text-white"
          onClick={() => setModalShow(true)}
        >
          Crear post
        </Button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
