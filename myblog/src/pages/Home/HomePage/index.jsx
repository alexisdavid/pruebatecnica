import React, { useEffect, useState } from "react";
import { Layout } from "../../Layouts/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardComponent } from "../../../Components/CardComponent";
import {  PaginationComponet } from "../../../Components/Pagination";
import { SearchBar } from "../../../Components/SearchBar";
import { ArticleDetails } from "../ArticleDetails";
import { ModalComponent } from "../../../Components/ModalComponent/ModalComponent";
import { useAppContext } from "../../../Context/AppContext";
import Request from '../../../utils/http'
const request = new Request();



export const HomePage = () => {

  const {user} = useAppContext()
  const [dataPosts,setDataPosts] = useState([])
  const [showDetails,setShowDetails] = useState(false)  
  const [dataPostsDetails,setDataPostsDetails] = useState(null)  
  const [isLogued,setIsLogued]=useState(false)
  const [userData,setUserData]=useState(null)  
  useEffect(()=>{
    if (user!='tengo estado') {
        
        setUserData(user)
        setIsLogued(true)
      }
      getData()
  },[user])
 const getData=async() => {
  const response = await request.get('posts/getPost')
 if (response && response.statusCode === 200) {
  setDataPosts(response.result.data)
  
 }
 }


  const handleDetails = (positionPost) =>{
    
      setDataPostsDetails(dataPosts[positionPost])      
      setShowDetails(true)
    }
    const handleBack=()=>{
      
      setDataPostsDetails(null)      
      setShowDetails(false)
  }

  const clearResults=()=> getData()
  return (
    <Layout>
        { !showDetails ? 
        <ListPosts {...{dataPosts,handleDetails,clearResults,setDataPosts,isLogued}} />
          :
        <ArticleDetails {...{dataPostsDetails,handleBack}} />}
    </Layout>
  );
};

const ListPosts=({dataPosts,handleDetails,clearResults,setDataPosts,isLogued})=>{

  const handleSearch=(text)=>{
    if(text.length < 3 )
    {
      clearResults()
      return;
    }
    const copyPosts =JSON.parse(JSON.stringify(dataPosts));
    const filteredPost = copyPosts.filter(post => post.autor.toLowerCase().includes(text.toLowerCase()) ||post.content.toLowerCase().includes(text.toLowerCase())||post.title.toLowerCase().includes(text.toLowerCase())) ;


  setDataPosts( filteredPost);

  }
  return(
    <>
      <Row>

        <Col xs={9} >
          <Col className="mt-3">
             <SearchBar {...{handleSearch}} />
          </Col>
          {dataPosts.map((post,k) =>{
            const {title,coverPick,content,autor,score}=post
            return(
              <CardComponent 
                key={post.id} 
                position={k}
                title={title}
                img={coverPick}
                text={content.substring(0,60)}
                textButton='Leer articulo ...'
                subtext={autor}
                score={score}
                handleClick={handleDetails}
              />
            )
          })}
          <PaginationComponet />
          
        </Col>
        <Col xs={3}>
          <ModalComponent isLogued={isLogued}/>
        </Col>
        
      </Row>

    </>
  )
}


