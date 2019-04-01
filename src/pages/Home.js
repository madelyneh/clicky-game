import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Wrapper from '../components/Wrapper';
import PictureCard from "../components/PictureCard/index"
import characters from "./../components/PictureCard/pictures.json";
import mickey from './../components/NavBar/mickey_mouse.png';

import "./style.css";

class Home extends Component {
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: "Click as many images as you can without repeating",
    show:false
  };
  

  componentDidMount() {
        this.setState({ characters: this.shuffleDeck(this.state.characters) });
        
    }
    
    shuffleDeck = characters => {
        let newFriends = characters.sort(() => Math.random() -0.5);
        return newFriends;
    };

    resetDeck = characters => {
        const resetFriends = characters.map(item => ({ ...item, clicked: false }));
        if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
        return this.shuffleDeck(resetFriends);
      };

    correctPick = newData => {
        let newScore = this.state.score;
        newScore++
        let newTopScore = Math.max(newScore, this.state.topScore);
        

        this.setState({
            characters: this.shuffleDeck(newData),
            score: newScore,
            topScore: newTopScore,
        })
    }

    wrongPick = newData => {
        this.setState({
            characters: this.resetDeck(newData),
            score: 0,
            show:false
            
        });
        this.timeoutId = setTimeout(function () {
        this.setState({show: true});
        }.bind(this), 0);
        
    }

    gameCardClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.characters.map(item => {
          if (item.id === id) {
            if (!item.clicked) {
              item.clicked = true;
              guessedCorrectly = true;
            }
          }
          return item;     
        });
        guessedCorrectly ? this.correctPick(newData) : this.wrongPick(newData);
      };
 

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore = {this.state.topScore}></Navbar>
       
        <div className="container intro-row" >
        {this.state.score !== 0 ? (""):(
          <div className="row intro">
            <div className="col-sm-5 ">
              <img className="mickeyWhole float-right" alt="mickey" src={mickey}/>
            </div>
            <div className="col-sm-7">
              <div className="mickeySays">
                <p>Hello there! Can you help me get all my friends attention?</p>
                <p>You do this by clicking on them, but you can only click </p>
                  <p>them once or they will get upset.</p>
              </div>
            </div>
          </div>
          ) 
        }
        </div>

        <div className="container">
        <div className="row">
        {this.state.characters.map(character => (
          <div className={this.state.show ? 'shake col-3' : 'col-3'} key={character.id}>
          <PictureCard
            id={character.id}
            image={character.src}
            handleClick={this.gameCardClick}
          />
          </div>
        ))}
        </div>
        </div>
      </Wrapper>
    );
  }
}
export default Home;