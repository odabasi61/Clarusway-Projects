import logo from "./assets/react.svg";
import { languages } from "./helper/Data";
import Cards from "./components/Cards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <header className="text-center p-5">
        <img src={logo} alt="" />
      </header>
      <Container className="rounded-4 px-4 pb-4">
        <h1 className="text-white py-2 text-center">Languages</h1>
        <Row className="g-3">
          {languages.map((item, index) => (
            <Col className="text-center" sm={12} md={6} xl={3} key={index}>
              <Cards {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
