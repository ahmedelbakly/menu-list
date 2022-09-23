import React,{useEffect} from "react";
import { Col, Row, Button } from "react-bootstrap";
import { initData } from "./helper/Data";
import AOS from "aos";
import "aos/dist/aos.css";


const Category = ({setData,data}) => {
  useEffect(() => {
    AOS.init({duration:2000});
  }, []);
  return (
    <Row>
      <Col sm={12}>
        <div className="d-flex justify-content-center mt-5">
          <Button data-aos="fade-left"
            variant="danger mx-2 px-4"
            className="btn"
            onClick={() => setData(initData)}
          >
            الكل
          </Button>
          <Button data-aos="fade-left"
            variant="danger mx-2 px-4"
            onClick={() => setData(initData.filter(x=>x.category==="فطار"))}
          >
            الفطار
          </Button>
          <Button  data-aos="fade-right"
            variant="danger  mx-2 px-4"
            onClick={() => setData(initData.filter(x=>x.category==="غداء"))}
          >
            الغداء
          </Button>
          <Button  data-aos="fade-right"
            variant="danger mx-2 px-4"
            onClick={() => setData(initData.filter(x=>x.category==="عشاء"))}
          >
            العشاء
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Category;
