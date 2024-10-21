let randomNumber =console.log(parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validaeGuess(guess);
    })
}

function validaeGuess(guess){
    //validate the guesses
    if(isNaN(guess)){
        alert("Please a valid number between 1 and 100");
    }else if(guess < 1){
        alert("Please a valid number more than 1");
    }else if(guess > 100){
        alert("Please a valid number less than 100");
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over, random number was ${randomNumebr}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    //check guess is equal or not
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`number is too low`);
    }else if(guess > randomNumber){
        displayMessage(`number is too high`);
    }

}

function displayGuess(guess){
    //clean values, update guesses array
    userInput.value='';
    guessSlot.innerHTML = `{guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    //Empty user value, add guess to html,, reduce numbers
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //end the game
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame>Start new Game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    //reset everything
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}
