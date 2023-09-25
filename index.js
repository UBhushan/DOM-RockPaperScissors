const score = JSON.parse(localStorage.getItem('score')) 
			||{
				Win: 0,
				Losses: 0,
				Ties: 0
			};

			document.querySelector('.js-Score').innerHTML =  'Win:' + score.Win + ' Losses:' + score.Losses + ' Ties:' + score.Ties;
			
			let compChoice = '';
			let result = '';
			
			function compMove()
			{
				let randomNum = Math.random();

				if(0 <= randomNum && randomNum < (1/3))
					compChoice = 'Rock';
				else if((1/3) <= randomNum && randomNum < (2/3))
					compChoice = 'Paper';
				else if((2/3) <= randomNum && randomNum < 1)
					compChoice = "Scissors";

				console.log('Computer Picked: ' + compChoice + '.');
			}

			function playMove(move)
			{
				compMove();
				
				if(move === compChoice){
					result = 'Tie';
				}

				else if( move === "Rock"){
					if(compChoice === 'Paper') result = 'Lose';
					else if(compChoice === 'Scissors') result = 'Win';
				}

				else if( move === "Paper"){
					if(compChoice === 'Scissors') result = 'Lose';
					else if(compChoice === 'Rock') result = 'Win';	
				}
				
				else if( move === "Scissors"){
					if(compChoice === 'Rock') result = 'Lose';	
					else if(compChoice === 'Paper') result = 'Win';
				}

				if(result === 'Win') score.Win++;
				else if(result === 'Lose') score.Losses++;
				else if(result === 'Tie') score.Ties++;

				console.log('You Picked: ' + move + '.' + result);

				document.querySelector('.result').innerHTML = (result === 'Tie' ? 'Game ': 'You ') + result;

				document.querySelector('.moves').innerHTML = 
				`You<img src="images/${move}-emoji.png" class="move-icon"><span class="title">::</span><img src="images/${compChoice}-emoji.png" class="move-icon">Computer`;

				document.querySelector('.js-Score').innerHTML =  'Win:' + score.Win + ' Losses:' + score.Losses + ' Ties:' + score.Ties;
				
				localStorage.setItem('score', JSON.stringify(score));
			}
