import React from "react";
import "./style.css";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";



function SingleCard() {
    return (
        <div>
            <div class="cardss">
                <h5 class="card-header">Contact</h5>
                <div class="card-body">
                    <a href="mailto: a.blinstrubyte@outlook.com" target="_blank" class="btn btn-dark">Email <MdEmail/></a>
                    
                    <a href="https://www.linkedin.com/in/aida-blinstrubyte-04a3091b6/" target="_blank"
                class="btn btn-dark">LinkedIn <FaLinkedin/><i class="fab fa-linkedin-in"></i></a>
        
                    <a href="https://github.com/aidabyte" class="btn btn-dark" target="_blank">Github <FaGithub/></a> 
                    <a href="./FSF_RESUME.pdf" class="btn btn-dark" target="_blank">Resume</a>
                </div>
            </div>
        </div>
        
        
    );
}
  
 

export default SingleCard;