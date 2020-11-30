'use strict';
let msg = document.querySelector('.message')
let number = document.querySelector('.number')
let score = document.querySelector('.score')

let answer = Math.floor(Math.random() * 20)
let myScore = 20

let check = document.querySelector('.check')
check.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, answer);
    if (!guess) {
        msg.textContent = '⛔️ No Number!'
    }
    else if (guess === answer) {
        msg.textContent = '🎉 Correct Number!'
        document.querySelector('body').style.backgroundColor = '#60b347'
        number.style.width = '30rem'
    }
    else if (guess < answer) {
        msg.textContent = 'Too small!'
        number.textContent = guess
        myScore --
        score.textContent = myScore
        if (myScore <= 0) {
            msg.textContent = '💥 You lost the game!'
        }
    }
    else if (guess > answer) {
        msg.textContent = 'Too Big!'
        number.textContent = guess
        myScore --
        score.textContent = myScore
        if (myScore <= 0) {
            msg.textContent = '💥 You lost the game!'
        }
    }
})
