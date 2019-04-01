import React, {Component} from "react";
import "./style.css";

class Message extends Component {

    state = {
        animating: false,
        message: ""
    }

    componentDidUpdate(prevProps) {

      let newState = {
        animating: true
      }

      const {score, topScore} = prevProps

      if (score === 0 && topScore === 0) {
        newState.message = "";
      } else if (score !== 0 && topScore > 0) {
        newState.message = "correct";
      } else {
        newState.message = "incorrect";
      }

      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
  
    }

    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
          return "Good job! 😁";
        case "incorrect":
          return "You already guessed that one.. 😕";
        default:
          return "Good job! 😁";
        }
    };

    addAnimation = () => {
      switch (this.state.message) {
        case "correct":
          return "animated pulse";
        case "incorrect":
          return "animated wobble";
        default:
          return "";
        }     
    }

    render() {
        return(
          <p 
            className={` 
              gameMessage 
              ${this.state.animating? this.addAnimation(): ""}  
              ${this.state.animating? this.state.message: "black"}
            `}
            id={`${this.state.message}`}
            onAnimationEnd={() => this.setState({ animating: false })} 
          >
            {this.renderMessage()}
          </p>  
        );
    }
}

export default Message;