var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
var wins = 0;
var losses = 0;
var currentScore = 0;
var img1 = Math.floor(Math.random() * 12) + 1;
var img2 = Math.floor(Math.random() * 12) + 1;
var img3 = Math.floor(Math.random() * 12) + 1;
var img4 = Math.floor(Math.random() * 12) + 1;


//generates new random number on page
function randomcrystalNum() {
    img1 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img2 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img3 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
    img4 = Math.floor(Math.random() *(12 - 1 + 1) + 1);
} 

//keeps track of losses and wins
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
        randomCrystalNum();
	} else if(currentScore > randomNum){
		losses++;
		$('#losses').html(losses);
		$('#wins-or-losses').text('You lose!');
		radnomNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#randomNum').text(randomNum);
		currentScore = 0;
        $('#player-currentNum').text(currentScore);
        alert("You lose, and now you must continue onwards for humankind's fate rest in your hands...");
        randomCrystalNum();
	}
}



$('#randomNum').text(randomNum);



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




