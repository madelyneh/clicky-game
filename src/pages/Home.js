import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Wrapper from '../components/Wrapper';
import PictureCard from "../components/PictureCard/index"
import characters from "./../components/PictureCard/pictures.json";


class Home extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters,
    score: 0,
    topScore: 0,
    message: "Click as many images as you can without repeating",
    show:false
  };
  

  componentDidMount() {
        // reorders the dataarray on state changes
        this.setState({ characters: this.shuffleDeck(this.state.characters) });
        
    }
    
    // shuffle the imported data array in random order
    shuffleDeck = characters => {
        let newFriends = characters.sort(() => Math.random() -0.5);
        return newFriends;
    };

    // resets all the clicked properties to false
    resetDeck = characters => {
        const resetFriends = characters.map(item => ({ ...item, clicked: false }));
        if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
        // console.log(characters);
        // console.log(resetData);
        return this.shuffleDeck(resetFriends);
      };

    // checks to see if score is higher than the topscore then updates the state with the new update data
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

    // restarts the game with fresh data
    wrongPick = newData => {
        this.setState({
            characters: this.resetDeck(newData),
            score: 0,
            show:false
            
        });
        this.timeoutId = setTimeout(function () {
        this.setState({show: true});
        }.bind(this), 0);
        console.log(this.timeoutId)
        
    }

    // when a card is clicked, check if it has been clicked before,
    // then update that cards clicked property
    gameCardClick = id => {
        let guessedCorrectly = false;
        // newData will be the data array with updated clicked properties
        const newData = this.state.characters.map(item => {
          if (item.id === id) {
            if (!item.clicked) {
              item.clicked = true;
              guessedCorrectly = true;
            }
          }
          return item;     
        });
        // if guessedCorrectly = true, run the correctGuess function,
        // else run the wrongGuess function
        guessedCorrectly ? this.correctPick(newData) : this.wrongPick(newData);
      };




 

  // Map over this.state.characters and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore = {this.state.topScore}></Navbar>
        <div className="container">
        <div className="row">
        {this.state.characters.map(character => (
          <div className={this.state.show ? 'shake col-3' : 'col-3'} key={character.id}>
          <PictureCard
            id={character.id}
            image={character.image}
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