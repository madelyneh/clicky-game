import * as React from "react";
import mickey from './Mickey_Mouse_head_and_ears.png';
import "./style.css";

const Navbar = props => (
  
  <div >
      <nav className="navbar fixed-top">
          <div className="col-sm text-center">
              <h1>Clicky for Mickey <img className="mickey-black" alt="mickey" src={mickey}/></h1>
          </div>
          
          
          <div className="col-sm text-center score">
              <div className="float-right ">⦙ Score: {props.score} ⦙ ⦙ Top Score: {props.topScore} ⦙</div>
          </div>
      </nav>
  </div>
)

export default Navbar;