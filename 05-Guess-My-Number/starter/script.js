'use strict';
let msg = document.querySelector('.message')
let number = document.querySelector('.number')
let score = document.querySelector('.score')

let answer = Math.floor(Math.random() * 20)
let myScore = 20
let highscore = 0

// check btn 
let check = document.querySelector('.check')
check.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, answer);
    if (!guess) {
        msg.textContent = '⛔️ No Number!'
    }
    else if (guess === answer) {
        msg.textContent = '🎉 Correct Number!'
        number.textContent = guess
        document.querySelector('body').style.backgroundColor = '#60b347'
        number.style.width = '30rem'
        
        if (myScore > highscore) {
            highscore = myScore
            document.querySelector('.highscore').textContent = highscore
        }
    }
    else if (guess !== answer) {
        msg.textContent = 
            guess < answer ? 'Too small!' : 'Too Big!'
        myScore --
        score.textContent = myScore
        if (myScore <= 0) {
            msg.textContent = '💥 You lost the game!'
        }
    }
})

// again btn
let again = document.querySelector('.again')
again.addEventListener('click', function() {
    answer = Math.floor(Math.random() * 20)
    myScore = 20
    msg.textContent = 'Start guessing...'
    number.textContent = '?'
    document.querySelector('.guess').value = ''
    score.textContent = myScore
    document.querySelector('body').style.backgroundColor = '#222'
    number.style.width = '15rem'
})
