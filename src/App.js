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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSccRVwwl4ciW-j9FXxWpK1BOgalhIlPKjlpxr5yJg5UKaO6Rw/viewform?vc=0&c=0&w=1&flr=0">
              workout
            </a>
            <br />
            <a href="https://docs.google.com/spreadsheets/d/1kKEBMBDIk7f7lX3Yt88wA3drSodxAd-WHtbQuUGkEWY/edit?resourcekey#gid=1895309793">
              history
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>bar loader</h2>
            <a href="https://replit.com/@zoo00/barloader#index.js">replit</a>
            <hr />
            <ul>
              <li>DEADLIFT = 70,35,5,2.5</li>
              <li>SQUAT = 45,10,10,2.5</li>
              <li>OVERHead = 35,2.5</li>
              <li>BENCH = 35,5,2.5</li>
            </ul>
            <hr />
            <iframe
              frameborder="0"
              width="100%"
              height="500px"
              src="https://replit.com/@zoo00/barloader?embed=true"
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>workout instructions</h2>
            <iframe
              width="756"
              height="399"
              src="https://www.youtube.com/embed/YfOI8BdrntQ"
              title="What Is The Starting Strength Novice Progression ?"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Header />
      </Container>
    </div>
  );
}

export default App;
