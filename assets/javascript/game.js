//list of variables used
var randomNum = Math.floor(Math.random() * (120 - 19)) + 19; //generates random number 19-120 that player must reach
var wins = 0;
var losses = 0;
var currentScore = 0;
//generates random number 1-12 for each of the crystal images
var img1 = Math.floor(Math.random() * 12) + 1;
var img2 = Math.floor(Math.random() * 12) + 1;
var img3 = Math.floor(Math.random() * 12) + 1;
var img4 = Math.floor(Math.random() * 12) + 1;


//function that resets random 1-12 number for crystals
function randomcrystalNum() {
    img1 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img2 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img3 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img4 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
} 

//keeps track of player wins
function gamePlay(){
	if(currentScore === randomNum){
		wins++;
		$('#wins').text(wins);
		$('#wins-or-losses').text('You win!');
		randomNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNum').text(randomNum);
		currentScore = 0;
        $('#player-currentNum').text(currentScore);
        alert("You win, you are a regular crystal baller!");
        randomCrystalNum();  //call function to reset game
    }  else if(currentScore > randomNum){   //keeping track of player losses
		losses++;
		$('#losses').html(losses);
		$('#wins-or-losses').text('You lose!');
		radnomNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNum').text(randomNum);
		currentScore = 0;
        $('#player-currentNum').text(currentScore);
        alert("You lose, and now you must continue onwards for humankind's fate rest in your hands...");
        randomCrystalNum(); // call function to reset game
	}
}


//generates random number to display
$('#randomNum').text(randomNum);


//when click on an crystal image will add number to current score
$('#img1').on('click', function(){
	currentScore += img1;
	$('#player-currentNum').text(currentScore);
	gamePlay();
});


$('#img2').on('click', function(){
	currentScore += img2;
	$('#player-currentNum').text(currentScore);
	gamePlay();
});


$('#img3').on('click', function(){
	currentScore += img3;
	$('#player-currentNum').text(currentScore);
	gamePlay();
});


$('#img4').on('click', function(){
	currentScore += img4;
	$('#player-currentNum').text(currentScore);
	gamePlay();
});


//var crystalNum = Math.floor(Math.random() * 12) + 1;





/*

//generates random number when page refreshes
$(document).ready(function() {
$("#randomNum").text(randomNum);
})

//generates random number when img 1 is clicked
$("#img1").on('click', function() {
$("#player-currentNum").text(crystalNum);


$("#img2").on('click', function() {
$("#player-currentNum").text(crystalNum);
})
});
*/




