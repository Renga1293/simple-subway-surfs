
	cross = true; 
	score = 0; 
	document.onkeydown = function(e) { 
		console.log(e.keyCode); 
		if (e.keyCode == 38) { 
			police = document.querySelector('.police'); 

			police.classList.add('animatepolice'); 
			
			setTimeout(() => { 
				police.classList.remove('animatepolice'); 
			}, 700); 
		} 
		if (e.keyCode == 37) { 
			police = document.querySelector('.police'); 

			policex = parseInt(window.getComputedStyle( 
				police, null).getPropertyValue('left')); 

			police.style.left = policex - 112 + "px"; 
		} 
		if (e.keyCode == 39) { 
			police = document.querySelector('.police'); 

			policex = parseInt(window.getComputedStyle( 
				police, null).getPropertyValue('left')); 
			
			police.style.left = policex + 112 + "px"; 
		} 
	} 
	setInterval(() => { 
		police = document.querySelector('.police'); 
		gameover = document.querySelector('.gameover'); 
		obstacle = document.querySelector('.obstacle'); 

		dx = parseInt(window.getComputedStyle( 
			police, null).getPropertyValue('left')); 

		dy = parseInt(window.getComputedStyle( 
			police, null).getPropertyValue('bottom')); 

		ox = parseInt(window.getComputedStyle( 
			obstacle, null).getPropertyValue('left')); 

		oy = parseInt(window.getComputedStyle( 
			obstacle, null).getPropertyValue('bottom')); 

		offsetx = Math.abs(dx - ox); 
		offsety = Math.abs(dy - oy); 

		console.log(offsetx, offsety); 

		if (offsetx < 120 && offsety <= 144) { 
			if (score != 0) 
				scorecount.innerHTML = "Your score : " + score; 
			gameover.style.visibility = 'visible'; 
			obstacle.classList.remove('animateobstacle'); 
		} else if (offsetx < 125 && cross) { 
			score += 1; 
			updateScore(score); 
			cross = false; 
			setTimeout(() => { 
				cross = true; 
			}, 1000); 
			setInterval(() => { 
				obsanidur = parseFloat(window 
				.getComputedStyle(obstacle, null) 
				.getPropertyValue('animation-duration')); 

				obstacle.style.animationDuration 
					= obsanidur - 0.01 + 's'; 
			}, 500); 
		} 
	}, 10); 

	function updateScore(score) { 
		scorecount.innerHTML = "Your score : " + score; 
	} 

