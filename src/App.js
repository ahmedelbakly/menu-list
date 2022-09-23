import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Header from "./Components/header";
import Category from "./Components/Categroy";
import ListItem from "./Components/List-item";
import { initData } from "./Components/helper/Data";


function App() {
  const [data, setData] = useState(initData);
  console.log(data);
  return (
    <div>
      <NavBar setData={setData} />
      <Container className="ml-0">
        <Header />
        <Category setData={setData} data={data} />
        <ListItem data={data} />
    
      </Container>
    </div>
  );
}

export default App;
