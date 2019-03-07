import React, {Component} from "react";
import NavBar from "../components/NavBar";
import Pictures from "../components/Pictures/index"
// import Wrapper from "../components/Wrapper"
 

class Home extends Component {

  state= {
    incorrect: [],
    picked: []
  };


  render() {
    return (
      <div>
        <NavBar />
        <Pictures />
      </div>
    );
  }
};

export default Home;