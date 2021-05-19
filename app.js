const game = ()=> {

    let pScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');  
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.comp-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions = ['rock','paper','scissor'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //comparing hands
                    compareHands(this.textContent, computerChoice);

                    //updateImages
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                    
                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';  
                computerHand.style.animation = 'shakeComputer 2s ease';  
            });
        });
    };
    //updating Score
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');        
        const computerScore = document.querySelector('.comp-score p');        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }

    const compareHands = (playerChoice, computerChoice)=>{
        const winner = document.querySelector('.winner');
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissor'){
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissor'){
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissor'){
            if(computerChoice === 'paper'){
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //Call all the inner functions
    startGame();
    playMatch();
};

game();