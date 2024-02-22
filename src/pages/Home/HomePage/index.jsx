import React from "react";
import { Layout } from "../../Layouts/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardComponent } from "../../../Components/CardComponent";
import {  PaginationComponet } from "../../../Components/Pagination";
import { SearchBar } from "../../../Components/SearchBar";

let blogPosts = [
  {
    id: 1,
    id_category: 4,
    id_autor: 5,
    title: 'Post 1',
    autor: 'Autor 1',
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
    autor: 'Autor 2',
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
    autor: 'Autor 3',
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
    autor: 'Autor 4',
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
    autor: 'Autor 5',
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
    autor: 'Autor 1',
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
    autor: 'Autor 2',
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
    autor: 'Autor 3',
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
    autor: 'Autor 4',
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
    autor: 'Autor 5',
    releasedDate: '29/01/2024',
    coverPick: 'https://th.bing.com/th/id/OIP.TniMOt1gsBoXbhJ-x6L_RAHaEK?rs=1&pid=ImgDetMain',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla augue, luctus quis euismod finibus, pharetra et arcu. Sed vestibulum diam sed lectus pretium facilisis vitae luctus turpis. Nunc a est diam. In hac habitasse platea dictumst. In accumsan, lectus vel lacinia tincidunt, quam purus vulputate urna, ac gravida mauris ipsum vitae diam. Integer turpis sapien, varius id varius id, tristique vel libero. Integer non leo varius, tristique orci vitae, placerat augue. Mauris laoreet mollis libero. Curabitur nec est sapien. Morbi scelerisque varius dictum. Donec nisi nunc, ultrices sodales volutpat non, ullamcorper a ex. Duis condimentum nunc nec nunc vulputate, vitae sagittis lacus efficitur.",
    score:1
  }
];

export const HomePage = () => {
  return (
    <Layout>
      <SearchBar />
      <Row>
        <Col xs={9} >
          {blogPosts.map((post) =>{
            const {title,coverPick,content,autor,score}=post
            return(
              <CardComponent 
                key={post.id} 
                title={title}
                img={coverPick}
                text={content.substring(0,60)}
                textButton='Leer articulo ...'
                subtext={autor}
                score={score}
              />
            )
          })}
          <PaginationComponet />
          
        </Col>
        <Col xs={3}>Second, but last</Col>
        
      </Row>
    </Layout>
  );
};



