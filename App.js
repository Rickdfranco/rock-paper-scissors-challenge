import React from 'react'
import ReactDOM from "react-dom";
import Player from "./player";

//declaring the options
const options = ["rock","paper","scissors"];

//setting state
state = {
    playerOne:options[0],
    PlayerTwo:options[0],
    winner:""
};

//setting the score counter
//randomizing the options for player 2

StartGame= () =>{
    let counter = 0;
    let gameInterval = setInterval (() =>{
        counter++;
        this.setState({
            playerTwo: options[Math.floor(math.random()*options.length)],
            winner:" "
        });
        if (counter > 5){
            clearInterval(gameInterval);
            this.setState({
                winner:this.setWinner()
            });
        }
    },100);
};
//declaring logic/criteria for how the game is won
selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player One Wins!";
    } else {
      return "Player Two Wins!";
    }
  };

  selectOptions = options => {
      this.setState({
          PlayerOne:options,
          winner:""
      });
  };

class App extends React.Component{
render(){
    return(
        <div>
            <h1>Rock Paper Scissors</h1>
            <div>
                <Player/>
            </div>
            
            <div>
                <button className='OptionsBtn'
                   onClick={() => this.options("rock")}
                >Rock</button>

                <button className='OptionsBtn'
                 onClick={() => this.options("paper")}
                >Paper</button>

                <button className='OptionsBtn'
                 onClick={() => this.options("scissors")}
                >Scissors</button>
            </div>

            <div className = "winner">{winner ? this.selectWinner() : null}</div>

            <button type = 'button' onClick={this.startGame}>Start!</button>
        </div>   
    );
}
}

const rootElement = document.getElelmentById("root");
ReactDOM.render(<App/>, rootElement);