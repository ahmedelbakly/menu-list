import React, { useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";



const Item = ({item,index}) => {
  console.log(index);
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <>
      <Col sm={12}>
        <Card data-aos={index%2===0?"fade-down-right":"fade-down-left"}
          style={{ width: "100%" }}
          className="justify-content-start flex-row mb-5 flex-ms-colum"
        >
          <Card.Img variant="" src={`images/${item.img}`} />
          <Card.Body>
            <Card.Title className="text-end fs-2">{item.title}</Card.Title>
            <Card.Text className="text-end fs-4">
             {item.disc}
            </Card.Text>
           
          </Card.Body>
          <p className="price fs-4">{item.price}EP</p>
        </Card>
      </Col>
     
    </>
  );
};

export default Item;
