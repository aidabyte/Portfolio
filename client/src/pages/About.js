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
            Full Stack web developer with a background in Cosmetology. Certificate in Full Stack Web Development from Northwestern University in Chicago. Newly developed skills in HTML, CSS, JavaScript, MongoDB, APIs, MySQL, Node.js, React, and responsive web design. Strengths in teamwork, communication, and collaboration.Known for having a great eye in design and enthusiasm for developing apps that are mobile friendly. With every project my goal is to have the user have the best experience possible and everything to be properly functioning. I worked on a team of four towards a React app and my main focus was the design and functionality. I’m excited to express my experience from my cosmetology background, joined together with my technical skills, and a meticulous eye for detail making me an asset to any driven team. 
</p>
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
