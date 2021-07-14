import React from "react";
import "./style.css";
import {FaGithub,FaLinkedin} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FiFileText} from "react-icons/fi";



function SingleCard() {
    return (
        <div>
            <div class="cardss">
                {/* <h5 class="card-header">Contact</h5> */}
                <div class="card-body">
                    <a href="mailto: a.blinstrubyte@outlook.com" target="_blank" class="btn btn-dark btnn">Email <MdEmail/></a>
                    
                    <a href="https://www.linkedin.com/in/aida-blinstrubyte-04a3091b6/" target="_blank"
                class="btn btn-dark btnn">LinkedIn <FaLinkedin/><i class="fab fa-linkedin-in"></i></a>
        
                    <a href="https://github.com/aidabyte" class="btn btn-dark btnn" target="_blank">Github <FaGithub/></a> 
                    <a href="./FSF_RESUME.pdf" class="btn btn-dark btnn" target="_blank">Resume <FiFileText/></a>
                </div>
            </div>
        </div>
        
        
    );
}
  
 

export default SingleCard;