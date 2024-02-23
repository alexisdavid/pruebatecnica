import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
export const ArticleDetails = ({dataPostsDetails=null,handleBack}) => {
    const [post,setPost]=useState({
        autor:'',
        content:'',
        coverPick:'',
        id:'',
        id_autor:'',
        id_category:'',
        releasedDate:'',
        score:'',
        title:'',
    })
    useEffect(()=>{
        if (dataPostsDetails!=null) {
            setPost(dataPostsDetails)
        }

    },[dataPostsDetails])
  return (
    <>
      <Row>
        <Col xs={12} className='mt-3' >
        <Button variant={'danger'} onClick={handleBack}>
        <FontAwesomeIcon icon={faReply}  /> &nbsp; Volver        
        </Button>
        <img
            src={post.coverPick}
            alt="imagen cover"
            className="shadow rounded mt-2"
            style={{ height: "50%",width:'100%' }}
          />

        <Col className='mt-0 d-flex justify-content-between'>
            <h1>{post.title}</h1>
        <h5 className='text-gray mt-3'>Fecha de publicacion: {post.releasedDate}</h5>
        </Col>
        <Col>
            <h5 className='text-gray'>{post.autor}</h5>
        
        </Col>
        <Col className='mt-0'>
            <p>{post.content}</p>
        </Col>


        </Col>
        </Row>
    
    </>
  )
}
