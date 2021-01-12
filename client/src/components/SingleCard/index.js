import React from "react";
import "./style.css"

function SingleCard() {
    return (
        <div>
            <div class="cardss mx-auto">
                <h5 class="card-header">Contact</h5>
                <div class="card-body">
                    <h5 class="card-title">Email: ablinstrubyte@gmail.com</h5>
                   
                    <h5 class="card-title"></h5>
                    <a href="https://www.linkedin.com/in/aida-blinstrubyte-04a3091b6/" target="_blank"
                class="btn btn-dark">LinkedIn</a>
                    <a href="https://github.com/aidabyte" class="btn btn-dark" target="_blank">Github</a>
                    <a href="./Resume.pdf" class="btn btn-dark" target="_blank">Resume</a>
                </div>
            </div>
        </div>
        
    );
}
  
 

export default SingleCard;