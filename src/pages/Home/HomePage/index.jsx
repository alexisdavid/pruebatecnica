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

let blogPosts = [
  {
    id: 1,
    id_category: 4,
    id_autor: 5,
    title: 'Post 1',
    autor: 'Juan Lopez',
    releasedDate: '20/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. /n Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:3
  },
  {
    id: 2,
    id_category: 2,
    id_autor: 3,
    title: 'Post 2',
    autor: 'Marcos Garcia',
    releasedDate: '21/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:4
  },
  {
    id: 3,
    id_category: 1,
    id_autor: 2,
    title: 'Post 3',
    autor: 'Maria Juarez',
    releasedDate: '22/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:5
  },
  {
    id: 4,
    id_category: 3,
    id_autor: 1,
    title: 'Post 4',
    autor: 'Victoria Alcudia',
    releasedDate: '23/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:2
  },
  {
    id: 5,
    id_category: 4,
    id_autor: 4,
    title: 'Post 5',
    autor: 'David Duarte',
    releasedDate: '24/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:1
  },
  {
    id: 6,
    id_category: 2,
    id_autor: 5,
    title: 'Post 6',
    autor: 'Juan Lopez',
    releasedDate: '25/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:5
  },
  {
    id: 7,
    id_category: 1,
    id_autor: 3,
    title: 'Post 7',
    autor: 'Marcos Garcia',
    releasedDate: '26/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:3
  },
  {
    id: 8,
    id_category: 3,
    id_autor: 2,
    title: 'Post 8',
    autor: 'Maria Juarez',
    releasedDate: '27/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:4
  },
  {
    id: 9,
    id_category: 2,
    id_autor: 1,
    title: 'Post 9',
    autor: 'Victoria Alcudia',
    releasedDate: '28/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:2
  },
  {
    id: 10,
    id_category: 1,
    id_autor: 4,
    title: 'Post 10',
    autor: 'David Duarte',
    releasedDate: '29/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:1
  }
];

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

  const clearResults=()=> setDataPosts(blogPosts)
  return (
    <Layout>
        { !showDetails ? 
        <ListPosts {...{dataPosts,handleDetails,clearResults,setDataPosts,blogPosts,isLogued}} />
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
    const copyPosts =JSON.parse(JSON.stringify(blogPosts));
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


