var crystalNum = Math.floor(Math.random() * 12) + 1;
var randomNum = Math.floor(Math.random() * (120 - 19)) + 19;

console.log(crystalNum);
console.log(randomNum);


//generates random number when page refreshes
$(document).ready(function() {
$("#randomNum").text(randomNum);
})