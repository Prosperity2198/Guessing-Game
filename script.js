let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const check = document.querySelector('.check');
const guessInp = document.querySelector('.guess');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const displayHighscore = document.querySelector('.highscore');


const displayMsg = (msg) => {
    message.textContent = msg;
};

check.addEventListener('click', () => {
    const guess = Number(guessInp.value);

    if (!guess) {
        displayMsg('⛔ No number!');

    } else if (guess === randomNum) {
        displayMsg('🎉 Correct Number!');
        number.textContent = randomNum
        number.style.width = '30rem';
        document.body.style.backgroundColor = 'green';

        if (score > highscore) {
            highscore = score;
            displayHighscore.textContent = highscore
        }

    }else if (guess !== randomNum) {
        if (score > 1) {
            displayMsg(guess > randomNum ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore.textContent = score;
        } else {
            displayMsg('💥 You lost the game!');
            displayScore.textContent = 0;
            document.body.style.backgroundColor = 'red'
        }
    }
});

again.addEventListener('click', () => {
    score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;

    displayMsg('Start guessing...');
    displayScore.textContent = score;
    number.textContent = '?';
    guessInp.value = '';

    number.style.width = '15rem';
    document.body.style.backgroundColor = '#222';
});