import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer"


function About() {
  return (
    <div>
      <Hero backgroundImage="computer.jpg">

      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row><div className = "circleImage" style= {{backgroundImage:"url(/images/me.png)"}}></div></Row>
        <Row>
          <Col size="md-12">
            <h1>Aida Blinstrubyte</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Hello! My name is Aida Blinstrubyte. Im originally from Lithuania. I grew up in the suburbs of Chicago, but now I am currently living in Chicago, Illinois.
                  I'm a front end developer that is a problem solver and an organised person. I am I have an obsession with collecting all types of different cacti. 
                  I love traveling and seeing what the world has to offer. 
                  In my free time i love discovering new pescatarian dishes, hiking, and doing yoga.</p>
            <p>
              
            </p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
    
  );
}

export default About;
