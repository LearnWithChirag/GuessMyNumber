let secretNumber = Math.trunc(Math.random()*20)+1;
let score=10;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value)
    // console.log(guess)
    // console.log(secretNumber)
    
    if(!guess){
        document.querySelector('.message').textContent = '⚠️Enter Number';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent = '🥳Correct Number';

        document.querySelector('.hiddenNumber').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#008000';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highScore').textContent=score;
        }

        // document.querySelector('.highScore').textContent = score;
        // document.createElement(body)
    }else {
        const text = guess > secretNumber? '📈Too High': '📉Too Low';
        document.querySelector('.message').textContent = text;
        // let scoreValue = document.querySelector('.score').textContent;
        if(document.querySelector('.score').textContent > 0){
            // console.log(scoreValue)
            document.querySelector('.score').textContent = --score;             

        }

    }
document.querySelector('.restart').addEventListener('click', function(){
    score = 10;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = '💭Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.hiddenNumber').textContent='?';

    document.querySelector('body').style.backgroundColor = 'black';
})

})