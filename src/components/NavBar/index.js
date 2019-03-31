import * as React from "react";
import Message from './../Message';
import mickeyHead from './mickeyHead.png';
import mickey from './mickey_mouse.png';
import "./style.css";

const Navbar = props => (
  
  <div >
      <nav className="navbar">
          <div className="col-sm text-center">
              <h1>Clicky for Mickey <img className="mickey" alt="mickey" src={mickeyHead}/></h1>
          </div>
          
           
          <div className="col-sm text-center message">
            <div className="float-center "><Message score={props.score} topScore={props.topScore} /></div>
         </div>

          
          <div className="col-sm text-center">
              <div className="float-right ">Score: {props.score} | Top Score: {props.topScore}</div>
          </div>
      </nav>
      <div className="col-sm">
        <div className="col-sm text-center">
          <img className="mickeyWhole" alt="mickey" src={mickey}/>
        </div>
        <div className="col-sm text-center">
          <h4>Hello there! Can you help me gather all my friends?</h4>
          <h4>You can only click them once or they will get upset.</h4>
        </div>
      </div>
  </div>
)

export default Navbar;