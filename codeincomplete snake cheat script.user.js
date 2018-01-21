// ==UserScript==
// @name         codeincomplete snake cheat script
// @namespace    https://github.com/johnnyawesome
// @version      0.1
// @description  Lets you set values for different ingame objects
// @author       JohnnyAwesome
// @match        https://codeincomplete.com/games/snakes/*
// @grant        none
// @icon         https://cdn0.iconfinder.com/data/icons/pixelo/32/skull.png
// ==/UserScript==

(function() {
	//'use strict';

	addHackButton();

	console.log("Snake Cheat Script by Johnny Awesome");

	function addHackButton() {

		var hackButton = document.createElement('button');
		var buttonText = document.createTextNode('HACK!!');
		hackButton.setAttribute('id', 'hack');
		hackButton.addEventListener("click", addCheatTweaks);
		hackButton.appendChild(buttonText);

		document.getElementsByTagName('body') [0].appendChild(hackButton);
	}


	function addCheatTweaks() {

		//alert("Game hacked");
		//game.newGame();

		//Adds Hacked Logo
		document.getElementById("logo").src="https://gurubox.files.wordpress.com/2017/06/hacked-2127635_640.png?w=128&h=128";

		//Black Background
		document.body.style.backgroundColor = "black";

		//removes Hakc Button
		document.getElementById("hack").remove();

		//Inserts rightful Hacker to the scoreboard name
		Game.localStorage.highscorename = "JohnnyAwesome";


		//Adds all the buttons for different Functions

		//Freeze Snake Size
		var freezeSnakeSizeButton = document.createElement('button');
		var freezeSnakeSizeButtonTest = document.createTextNode('Freeze Snake Size');
		freezeSnakeSizeButton.setAttribute('id', 'hack');
		freezeSnakeSizeButton.addEventListener("click", freezeSnakeSize);
		freezeSnakeSizeButton.appendChild(freezeSnakeSizeButtonTest);
		document.getElementsByTagName('body') [0].appendChild(freezeSnakeSizeButton);

		//Optimize Snake Size
		var optimizeSnakeSizeButton = document.createElement('button');
		var optimizeSnakeSizeButtonText = document.createTextNode('Optimize Snake Size');
		optimizeSnakeSizeButton.setAttribute('id', 'hack');
		optimizeSnakeSizeButton.addEventListener("click", optimizeSnakeSize);
		optimizeSnakeSizeButton.appendChild(optimizeSnakeSizeButtonText);
		document.getElementsByTagName('body') [0].appendChild(optimizeSnakeSizeButton);

		//Optimize and Freeze Snake
		var optimizeFreezeSnakeSizeButton = document.createElement('button');
		var optimizeFreezeSnakeSizeButtonText = document.createTextNode('Optimize & Freeze Snake');
		optimizeFreezeSnakeSizeButton.setAttribute('id', 'hack');
		optimizeFreezeSnakeSizeButton.addEventListener("click", optimizeFreezeSnakeSize);
		optimizeFreezeSnakeSizeButton.appendChild(optimizeFreezeSnakeSizeButtonText);
		document.getElementsByTagName('body') [0].appendChild(optimizeFreezeSnakeSizeButton);

		//Increses the Fruit Score by 1k
		var fruitScoreButton = document.createElement('button');
		var fruitScoreButtonText = document.createTextNode('Fruit Score + 10k');
		fruitScoreButton.setAttribute('id', 'hack');
		fruitScoreButton.addEventListener("click", fruitScore);
		fruitScoreButton.appendChild(fruitScoreButtonText);
		document.getElementsByTagName('body') [0].appendChild(fruitScoreButton);

		//Center Fruits
		var centerFruitsButton = document.createElement('button');
		var centerFruitsButtonText = document.createTextNode('Center Fruits');
		centerFruitsButton.setAttribute('id', 'hack');
		centerFruitsButton.addEventListener("click", centerFruits);
		centerFruitsButton.appendChild(centerFruitsButtonText);
		document.getElementsByTagName('body') [0].appendChild(centerFruitsButton);

		//Super Speed
		var superSpeedButton = document.createElement('button');
		var superSpeedButtonText = document.createTextNode('Super Speed');
		superSpeedButton.setAttribute('id', 'hack');
		superSpeedButton.addEventListener("click", superSpeed);
		superSpeedButton.appendChild(superSpeedButtonText);
		document.getElementsByTagName('body') [0].appendChild(superSpeedButton);

		//Linebreak
		var breaker = document.createElement('br');
		document.getElementsByTagName('body') [0].appendChild(breaker);

		//Slow Motion
		var sloMoButton = document.createElement('button');
		var sloMoButtonButtonText = document.createTextNode('Slow Motion');
		sloMoButton.setAttribute('id', 'hack');
		sloMoButton.addEventListener("click", sloMo);
		sloMoButton.appendChild(sloMoButtonButtonText);
		document.getElementsByTagName('body') [0].appendChild(sloMoButton);

		//Autopilot
		var autopilotButton = document.createElement('button');
		var autopilotButtonText = document.createTextNode('Autopilot');
		autopilotButton.setAttribute('id', 'hack');
		autopilotButton.addEventListener("click", autopilot);
		autopilotButton.appendChild(autopilotButtonText);
		document.getElementsByTagName('body') [0].appendChild(autopilotButton);

		//Insane Mode
		var insaneModeButton = document.createElement('button');
		var insaneModeButtonText = document.createTextNode('Insane Mode');
		insaneModeButton.setAttribute('id', 'hack');
		insaneModeButton.addEventListener("click", insaneMode);
		insaneModeButton.appendChild(insaneModeButtonText);
		document.getElementsByTagName('body') [0].appendChild(insaneModeButton);

		//Bot Mode
		var botModeButton = document.createElement('button');
		var botModeButtonText = document.createTextNode('Bot Mode');
		botModeButton.setAttribute('id', 'hack');
		botModeButton.addEventListener("click", botMode);
		botModeButton.appendChild(botModeButtonText);
		document.getElementsByTagName('body') [0].appendChild(botModeButton);

		//Teleport Mode
		var teleporteModeButton = document.createElement('button');
		var teleporteModeButtonText = document.createTextNode('Teleport Mode');
		teleporteModeButton.setAttribute('id', 'hack');
		teleporteModeButton.addEventListener("click", teleportMode);
		teleporteModeButton.appendChild(teleporteModeButtonText);
		document.getElementsByTagName('body') [0].appendChild(teleporteModeButton);

		//Crack Highscore
		var crackHighscoreButton = document.createElement('button');
		var crackHighscoreButtonText = document.createTextNode('Crack Highscore!!');
		crackHighscoreButton.setAttribute('id', 'hack');
		crackHighscoreButton.addEventListener("click", crackHighscore);
		crackHighscoreButton.appendChild(crackHighscoreButtonText);
		document.getElementsByTagName('body') [0].appendChild(crackHighscoreButton);

		//Win instantly!
		var instaWinButton = document.createElement('button');
		var instaWinButtonText = document.createTextNode('Instant Win!!');
		instaWinButton.setAttribute('id', 'hack');
		instaWinButton.addEventListener("click", instaWin);
		instaWinButton.appendChild(instaWinButtonText);
		document.getElementsByTagName('body') [0].appendChild(instaWinButton);

		//No Music
		var noMusicButton = document.createElement('button');
		var noMusicButtonText = document.createTextNode('No Music');
		noMusicButton.setAttribute('id', 'hack');
		noMusicButton.addEventListener("click", noMusic);
		noMusicButton.appendChild(noMusicButtonText);
		document.getElementsByTagName('body') [0].appendChild(noMusicButton);

		//Reload Page
		var reloadButton = document.createElement('button');
		var reloadButtonText = document.createTextNode('Reload Page');
		reloadButton.setAttribute('id', 'hack');
		reloadButton.addEventListener("click", reloadPage);
		reloadButton.appendChild(reloadButtonText);
		document.getElementsByTagName('body') [0].appendChild(reloadButton);







	}

	function test (){
		alert("Button Clicked");
	}

	function instaWin(){
		Game.localStorage.highscorename = "JohnnyAwesome";
		game.score.score = 10000000;
		game.snake.head.y = 3;
		game.snake.head.x = 3;
		game.snake.dstep = 0.005;
		game.sounds.highscore.play();

	}

	function crackHighscore(){
		Game.localStorage.highscorename = "JohnnyAwesome";
		game.score.score = 999999;
		game.fruit.score = 10000;
		game.sounds.highscore.play();

	}

	function freezeSnakeSize(){
		game.fruit.growth = 0;
		game.sounds.highscore.play();
	}

	function optimizeSnakeSize(){

		var snakeLength = game.snake.length;

		for (var i = snakeLength; i > 2; i--){
			game.snake.decrease();
		}
		snakeLength = 2;
		game.sounds.highscore.play();
	}

	function optimizeFreezeSnakeSize(){

		var snakeLength = game.snake.length;

		for (var i = snakeLength; i > 2; i--){
			game.snake.decrease();
		}
		snakeLength = 2;
		game.fruit.growth = 0;
		game.sounds.highscore.play();
	}

	function fruitScore(){

		game.fruit.score += 1000;
	}

	function centerFruits(){

		setInterval(function() {

			game.fruit.pos.x = 24;
			game.fruit.pos.y = 17;

		}, 2000);
	}

	function superSpeed(){

		game.snake.dstep = 0.001;
	}

	function sloMo(){

		game.snake.dstep = 0.3;
	}

	function autopilot(){

		setInterval(function() {

			//game.sounds.highscore.play();

			game.snake.dstep = 0.1;

			//Freezes Snake size
			var snakeLength = game.snake.length;

			for (var i = snakeLength; i > 2; i--){
				game.snake.decrease();
			}
			game.snake.length = 2;

			//Snake dowsn't grow anymore
			game.fruit.growth = 0;

			//CentersFruits
			game.fruit.pos.x = 24;
			game.fruit.pos.y = 17;
			//Centers Snake
			setTimeout(function(){

				game.snake.head.x = 24;
				game.snake.head.y = 17;

			}, 1000);

		}, 2000);
	}

	function insaneMode(){

		setInterval(function() {

			//game.sounds.highscore.play();

			game.snake.dstep = 0.001;

			//Freezes Snake size
			var snakeLength = game.snake.length;

			for (var i = snakeLength; i > 2; i--){
				game.snake.decrease();
			}
			game.snake.length = 2;

			//Snake dowsn't grow anymore
			game.fruit.growth = 0;

			//CentersFruits
			game.fruit.pos.x = 24;
			game.fruit.pos.y = 17;
			//Centers Snake
			setTimeout(function(){

				game.snake.head.x = 24;
				game.snake.head.y = 17;

			}, 500);


		}, 800);

	}

	function teleportMode(){

		//Speed that snake up!
		game.snake.dstep = 10;

		setInterval(function() {

			//Freezes Snake size
			var snakeLength = game.snake.length;

			for (var i = snakeLength; i > 2; i--){
				game.snake.decrease();
			}
			game.snake.length = 2;

			//Snake dowsn't grow anymore
			game.fruit.growth = 0;

			//Move Snake to fruits
			game.snake.head.x = game.fruit.pos.x;
			game.snake.head.y = game.fruit.pos.y;

		}, 50);

	}

	function botMode(){

		game.snake.dstep = 0.03;

		setInterval(function() {

			//Speed that snake up!


			//Freezes Snake size
			var snakeLength = game.snake.length;

			for (var i = snakeLength; i > 2; i--){
				game.snake.decrease();
			}
			game.snake.length = 2;

			//Snake dowsn't grow anymore
			game.fruit.growth = 0;

			//Move Snake to fruits
			if(game.snake.head.x < game.fruit.pos.x) game.snake.dir = 3;
			if(game.snake.head.x > game.fruit.pos.x) game.snake.dir = 2;
			if(game.snake.head.y < game.fruit.pos.y) game.snake.dir = 1;
			if(game.snake.head.y > game.fruit.pos.y) game.snake.dir = 0;

		}, 50);

	}

	function noMusic(){

		game.sounds.game.stop();
	}

	function reloadPage(){

		location.reload();
	}







})();