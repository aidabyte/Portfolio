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
      <Container style={{ marginTop: 30 }} style={{color: "white"}}>
        <Row><div className = "circleImage" style= {{backgroundImage:"url(/images/portrait.jpg)"}}></div></Row>
        <Row>
          <Col size="md-12">
            <h1>Aida Blinstrubyte</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Full stack web developer primarily focused in front end web development with a background in Cosmetology. Certificate in Full Stack Web Development from Northwestern University. Newly developed skills in HTML, CSS, JavaScript, MongoDB, APIs, MySQL, Node.js, React, and responsive web design. Strengths in teamwork, communication, collaboration, and known for having a great eye in design and enthusiasm for developing apps that are mobile friendly. Every project goal is to have the user have the best experience possible and everything to be properly functioning. Excited to utilize strong skills such as critical thinking and evaluating results to choose the best solution and solve problems that occur, along with my technical skills, and a meticulous eye for detail making me an asset to any driven team. 
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
