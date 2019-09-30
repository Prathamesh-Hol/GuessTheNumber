import React, {useState} from 'react';
import '../App.css';
import StartGame from '../Components/StartGame'

function App() {

    const [showComponent, setShowComponent] = useState(false);
    const [lowerBound, setlowerBound] = useState(10);
    const [upperBound, setupperBound] = useState(20);

    function playGame(){
        if(!showComponent && document.getElementById('lower-value').value && document.getElementById('upper-value').value){
            if(parseInt(document.getElementById('lower-value').value) > parseInt(document.getElementById('upper-value').value)){
                alert("Lower bound value should be less than upper bound value");
            }else{
                setlowerBound(document.getElementById('lower-value').value);
                setupperBound(document.getElementById('upper-value').value);
                setShowComponent(!showComponent); 
            }
        }else if(!showComponent && (!document.getElementById('lower-value').value || !document.getElementById('upper-value').value)){
            alert("Please enter both the values");
        }
        else{
            setlowerBound(10);
            setupperBound(20);
            setShowComponent(!showComponent);
        }
        
    }

    return (
        <div className="App">
            <h1>Guess The Number Game</h1>
            {!showComponent ?
                <div>
                    <h2>Game Configuration</h2>
                    <h3>Set the Lower Bound and Upper Bound to start the game</h3>
                    <div>
                        <label htmlFor='lower'>Lower Bound: </label> 
                        <input type="number" name="lower" id="lower-value" placeholder={'example:'+ lowerBound}></input>
                    </div>
                    <div>
                        <label htmlFor='upper'>Upper Bound: </label> 
                        <input type="number" name="upper" id="upper-value" placeholder={'example:'+ upperBound}></input>
                    </div>
                    <button onClick={playGame}>Set</button>
                </div> : <StartGame lower={lowerBound} upper={upperBound} showComponent={playGame}/>
            }
        </div>
    );
}

export default App;
