'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent =
  'Start guessing, you little piece of shit scumbag skunk!🦨';

let score = 20;
let highscore = 0;
let guessedNum = Math.floor(Math.random() * (20 - 1 + 1) + 1);
let guessed = false;

document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';

//Set message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Play again event
document.querySelector('.again-btn').addEventListener('click', function () {
  guessedNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.input-num').value = '';
  displayMessage('⛔ No number given, set the value, filthy dickhead!');
  guessed = false;
  document.querySelector('body').style.backgroundImage =
    'radial-gradient(#675B67, #3F373F)';
});

// Checking the entered value event
document.querySelector('.check-btn').addEventListener('click', function () {
  const numValue = Number(document.querySelector('.input-num').value);
  // document.querySelector('.number').textContent = Number(
  //   document.querySelector('.input-num').value
  // );
  if (!guessed) {
    //When player wins
    if (numValue === guessedNum) {
      displayMessage(
        "🥳 Congrats, moron! You've guessed, you skinky slacker. Now go and brag to your mum . . . "
      );
      document.querySelector('.input-num').value = '';
      score++;
      document.querySelector('.number').textContent = guessedNum;
      document.querySelector('.score').textContent = score;
      guessed = true;
      document.querySelector('body').style.backgroundImage =
        'radial-gradient(#3A9038, #216820)';
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else if (numValue != guessedNum) {
      if (score >= 1) {
        displayMessage(
          numValue > guessedNum
            ? 'Are you dumb or what? 🤦🏾‍♀️ Drop down the value a little . . . '
            : 'The value should be raised, like my cock behind your cheek 💎 . . . '
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else
        displayMessage(
          "You're waste! Now you can go and drink a cup of cyanide tea . . ."
        );
    }

    // If there is no input number
    if (!numValue) {
      document.querySelector('.message').textContent =
        "⛔ There's nothing to check, you idiot . . .";
    } else if (numValue > 20 || numValue < 1) {
      displayMessage(
        'Are you lobotomized? 🤕 I said the number in range (1, 20)'
      );
    }
  }
  // If player alreay guessed
  else {
    displayMessage("What are you, demented jerk? You've already guessed 🤷🏻‍♀️ Now go and jerk-off . . .");
  }
});
