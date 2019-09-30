import React, {useState} from 'react';
import '../App.css';
import Guess from '../Components/Guess';

function StartGame(props) {
    
    const [randomNum] = useState(getRandomArbitrary(props.lower,props.upper));
    const [showGuessComponent, setShowGuessComponent] = useState(false);
    const [GuessNumber, setGuessNumber] = useState(0);
    const [playAgain, setplayAgain] = useState(false);

    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function gameConfig(){
        props.showComponent();
    }
    function guessComp(){
        setGuessNumber(document.getElementById('user-input').value);
        setShowGuessComponent(true);
    }

    return (
        <div>
            {!playAgain ?
                <div>
                    <h2>Let's Play!!</h2>
                    <h3>Guess the number between {props.lower} and {props.upper}</h3>
                    <div>
                        <label htmlFor='Guess'>Guess: </label> 
                        <input type="text" name="guess" id="user-input"></input>
                    </div>
                    <div>
                        <button onClick={guessComp}>Check</button>
                        <button onClick={gameConfig}>Reset Game Config</button>
                    </div>
                </div>
                 :
                <div>
                    <button onClick={gameConfig}>Play Again</button><br></br>
                    <img src={require('../youwin.jpg')}></img>
                </div>
            }
            
            {showGuessComponent ?
                <div>
                    <Guess randomNum={randomNum} GuessNumber={GuessNumber} playAgain={() => setplayAgain(true)}/>
                </div> :
                null
            
            }
            
        </div>
    );
}


export default StartGame;
