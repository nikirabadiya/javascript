# Projects related to DOM

### Project Link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

### Project 1 Solution

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    console.log(e.target);
    // body.style.backgroundColor = e.target.id;
    body.style.backgroundColor = button.id;
    // both way works fine
  });
});
```

### Project 2 Solution

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === 0 || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid Height';
  } else if (weight === 0 || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Your bmi is <span>${bmi}</span> and you are under weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your bmi is <span>${bmi}</span> and you have a normal range weight`;
    } else {
      results.innerHTML = `Your bmi is <span>${bmi}</span> and you are overweight`;
    }
  }
});
```

### Project 3 Solution

``` javascript
// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  // clock.innerHTML = date.toLocaleTimeString(); // it doesn't show AM or PM so we use the below arguments in the date method
  clock.innerHTML = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // this ensures AM/PM is shown
  });
}, 1000);
```

### Project 4 Solution

``` javascript
let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const para = document.createElement('p');

let prevGuess = [];
let numguess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // for valid entries
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numguess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Number is too low`);
  } else if (guess > randomNum) {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displayMsg(msg) {
  lowOrHigh.innerHTML = `<h5>${msg}</h5>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<h5 id="newGame">Start New Game</h5>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    e.preventDefault();
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(para);
    playGame = true;
  });
}
```

### Project 5 Solution

``` javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>Keycode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```

### Project 6 Solution
``` javascript
// Generate a random color
const randomColor = function () {
  const hexValue = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChangeColor = function () {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }
};

const stopChangeColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangeColor);

document.querySelector('#stop').addEventListener('click', stopChangeColor);

```

### Project 7 Solution
``` javascript
```