import React from "react";
import Container from "../components/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card";
import Footer from "../components/Footer";


const picArr = ["/images/employeedirectory.png", "/images/NoteTaker.png", "/images/budgett.png", "/images/Fitness.png"]

const linkArr = [

  {
    title: "NoteTaker",
    image: "/images/NoteTaker.png",
    link: "https://serene-anchorage-84914.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Note-Taker-Hw"



  },
  {
    title: "Employee",
    image: "/images/employeedirectory.png",
    link: "https://obscure-reef-68172.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/employee-directory"



  },

  {
    title: "Budget Tracker",
    image: "/images/budgett.png",
    link: "https://shrouded-brook-89856.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Budget-Tracker"



  },
  {
    title: "Fitness Tracker",
    image: "/images/Fitness.png",
    link: "https://fathomless-savannah-49970.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Fitness-Tracker-Hw"



  }

]


function Portfolio() {
  return (
    <div>
      <Container>
        
        <div className="row" >
          {linkArr.map(item => {
            return <Card data={item} />
          })}
         
        </div>
        

      </Container>
      <Footer>
      </Footer>




    </div>

  );
}

export default Portfolio;