import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export const CardComponent = ({
  /*props que recibe mi componente y valores por defecto*/
  title = "Card Title",
  img = "holder.js/100px180",
  text = "  Some quick example text to build on the card title and make up the bulk of the cards content",
  showButton = true,
  variantButton = "primary",
  textButton = "Go somewhere",
  subtext = "",
  position=0,
  score=0,
  handleClick = () => {},
}) => {
  return (
    <Card style={{ width: "100%", height: "160px" }} className="shadow mt-3">
      <Row>
        <Col md={4} className=" ml-2 mt-2">
          <img
            src={img}
            alt="imagen cover"
            className="shadow"
            style={{ height: '100px' ,width:'200px'}}
          />
        </Col>
        <Col md={8}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>{title}</Card.Title>
              <small className="mt-2 ml-3 text-danger">{subtext}</small>
            </div>

            <Card.Text>{text}</Card.Text>
            <div className="d-flex justify-content-between">
              {showButton && (
                
                <Button variant={variantButton} onClick={e=>handleClick(position)}>
                  {textButton}
                </Button>
              )}
            <PuntuationDetails score={score} />
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

const PuntuationDetails = ({ score }) => {
  
  const fullStars = Math.floor(score);
  
  const fullStarsArray = Array(fullStars).fill(null);

  return (
    <div className="d-flex justify-content-between">
      <div className="pr-3">
        <FontAwesomeIcon icon={faHeart} color={"red"} />
        &nbsp;
      </div>
      <div>
        {fullStarsArray.map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color={"orange"} />
        ))}
       
      </div>
    </div>
  );
};
