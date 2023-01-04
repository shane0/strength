/* eslint-disable react/react-in-jsx-scope */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h2>workout log</h2>
          </Col>
          <Col>
            <h2>bar loader</h2>
          </Col>
          <Col>
            <h2>manage gyms</h2>
          </Col>
        </Row>
        <Header />
      </Container>
    </div>
  );
}

export default App;
