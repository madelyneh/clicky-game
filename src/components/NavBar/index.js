import * as React from "react";
import Message from './../Message';


const Navbar = props => (
  
  <div >
      <nav className="navbar">
          <div className="col-sm text-center">
              <h1>Clicky for Mickey</h1>
          </div>
          <div className="col-sm text-center">
              <div className="float-center "><Message score={props.score} topScore={props.topScore} /></div>
          </div>
          <div className="col-sm text-center">
              <div className="float-right ">Score: {props.score} | Top Score: {props.topScore}</div>
          </div>
      </nav>
  </div>
)

export default Navbar;