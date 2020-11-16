import React from 'react'
import scissors from "/assets/scissors.png";
import paper from "../assets/paper.png";
import rock from "../assets/rock.jpg";

const Player = ({options}) => (
    <div className="player">
        <img
            className="playerImage"
            src={
                options ==="rock" ? rock:
                options === "scissors" ?  scissors:
                 paper
            }
            alt="Rock Paper Scissors"
            />
    </div>
);

export default Player; 