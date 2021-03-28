import React from "react";
import Container from "../components/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card";
import Footer from "../components/Footer";


const picArr = ["/images/employeedirectory.png", "/images/NoteTaker.png", "/images/budgett.png", "/images/Fitness.png"]

const linkArr = [

  {
    title: "Note Taker",
    image: "/images/NoteTaker.png",
    link: "https://note-journal-taker.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Note-Taker-Hw",
    summary: "A digital notepad created to save, delete, and add notes so the user can remember what they wrote down when it was important. If you refresh the page the notes will still be there.",
    technologies: "Node.js, Express, and Postman"




  },
  {
    title: "Employee Directory",
    image: "/images/employeedirectory.png",
    link: "https://dir-of-employees.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/employee-directory",
    summary: "A directory of employees that consist of the employees name, age, picture, and country. An employer can access an employee by typing in their name or the first few letters. ",
    technologies: "Node.js, Inquirer, Console Tables, and MYSQL"



  },

  {
    title: "Budget Tracker",
    image: "/images/budgett.png",
    link: "https://shrouded-brook-89856.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Budget-Tracker",
    summary: "Budget Tracker application allows the user to access their withdrawals and deposits while being offline or online. The user will be able to add expenses and deposits to their budget.",
    technologies: "Node.js, Express, MongoDB, Mongoose, Morgan, Heroku, HTML, CSS"



  },
  {
    title: "Fitness Tracker",
    image: "/images/Fitness.png",
    link: "https://fathomless-savannah-49970.herokuapp.com/",
    gitLink: "https://github.com/aidabyte/Fitness-Tracker-Hw",
    summary:"An application that creates and tracks daily workouts by logging the multiple exercises that are put in for that day into a database. In addition, you can view the page of the last seven workouts and their summary.",
    technologies: "Node.js, Express, Mongodb, Mongoose, Heroku, HTML, and CSS"



  },
  {
    title: "Bobbys Hobbies",
    image: "/images/bobbylayout.png",
    link: "https://boiling-scrubland-76321.herokuapp.com",
    gitLink: "https://github.com/eptomlinson/BobbysHobbys",
    summary: "App provides a user to be able to view and like different hobbies that other users have previously uploaded. Also, they can post their own hobby that they are interested in by providing an image, description, and the cost of the hobby.",
    technologies: "React, Javascript, Bootstrap, Reactstrap, Cloudinary, MongoDB, Mongoose, Express, Axios, and Passport"




  }

]


function Portfolio() {
  return (

<div>
<Container>
<div class='row'>
{linkArr.map(item => {
return (
<div class='col-md-6'>
  <Card data= {item}/>
</div>
)
})}
</div>
</Container>
<Footer>
</Footer>




</div>

);
}

export default Portfolio;