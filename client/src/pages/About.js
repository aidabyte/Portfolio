import React from "react";
import Image from "../components/Image";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Image backgroundImage="gradient.jpg">
      </Image>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Aida Blinstrubyte</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Im originally from Lithuania. I grew up in the suburbs of Chicago, but now I am currently living in Chicago, Illinois.
                  I've been a hair colorist for the past six years of my life. I have an obsession with collecting all types of different cacti. My dogs name is Bella 
                  and she is 10 years old. I love traveling to new warm locations that I havent been to before. 
                  In my free time i love discovering new pescatarian dishes, hiking, and doing yoga.</p>
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
