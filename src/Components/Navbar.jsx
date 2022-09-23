import React, { useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import { initData } from "./helper/Data";

const NavBar = ({setData}) => {
  const [search, setSearch] = useState("");
  console.log(search);
  const Search = ()=> search&& setData(initData.filter(item=>item.title.includes(search)));
console.log(search);
  return (
    <Row className="w-100">
      <Col sm={12}>
        <Navbar expand="lg" variant="dark" className="" style={{  backgroundColor: "#19283f"}}>
          <Container>
            <Navbar.Brand href="#">
         <div>
         <img className="img-logo" src="/images/logo.jpg" alt="logo" />
         </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control 
                  type="search"
                  placeholder="ابحث"
                  className="me-2 "
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <Button variant="success" className="mx-1 " onClick={Search}>بحث</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBar;
