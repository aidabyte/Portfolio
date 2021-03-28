import React from "react";
import "./style.css"



function Card(props) {
  return (
 <div>
  <div className="row">
    <div className="container-fluid">
      <div className="col-sm-3 col-sm-9">
      
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title">{props.data.title}</h5>
              <img src={props.data.image} alt="project " />
              <p className="summary">{props.data.summary}</p>
              <p className="technologies">{props.data.technologies}</p>
              <a href={props.data.link} target="_blank"className="btn btn-dark">Website</a>
              <a href={props.data.gitLink} target="_blank" onClick="window.open{props.data.gitLink}"className="btn btn-dark">Github</a>
              
              
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        
        

        
        
        
         
       
        
        

        
       
        
        
       
      
      
        
      



  );
}

export default Card;
