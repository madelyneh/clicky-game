import * as React from "react";
import Message from './../Message';
import mickeyHead from './mickeyHead.png';
import "./style.css";

const Navbar = props => (
  
  <div >
      <nav className="navbar fixed-top">
          <div className="col-sm text-center">
              <h1>Clicky for Mickey <img className="mickey" alt="mickey" src={mickeyHead}/></h1>
          </div>
          
           
          <div className="col-sm text-center message">
            <div className="float-center "><Message score={props.score} topScore={props.topScore} /></div>
         </div>

          
          <div className="col-sm text-center score">
              <div className="float-right ">Score: {props.score} ⦙ Top Score: {props.topScore}</div>
          </div>
      </nav>
  </div>
)

export default Navbar;