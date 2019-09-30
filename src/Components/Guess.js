import React from 'react';
import '../App.css';

function Guess(props){
    var msg = ""
    if(props.GuessNumber > props.randomNum) {
        msg = "Nope. Lower than " + props.GuessNumber;
    }else if(props.GuessNumber < props.randomNum) {
        msg = "Nope. Higher than " + props.GuessNumber;
    }else{
        msg = "Congratulations!!";
        props.playAgain();
    }

    return(
        <div>
            <h2>{msg}</h2>
        </div>
    );

}

export default Guess;
