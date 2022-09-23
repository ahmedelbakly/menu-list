import AOS from "aos";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { initData } from "./helper/Data";
import Item from "./Item";
import "aos/dist/aos.css";


const ListItem = ({data}) => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <Row className="pt-5 pb-5 mt-5">
   {data.map((item,index)=> <Item item={item}index={index} />)}
    </Row>
  );
};

export default ListItem;
