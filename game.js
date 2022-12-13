var gamePattern=[];
var userClickedPattern=[];

var buttonColours=["red","blue","green","yellow"];
var randomChoosenColour;
var level=0;
var started=false;

// Detecting key press for starting game.
$(document).keypress(function(){
if(!started){
 $("#level-title").text("level "+level);
nextSequence();
started=true;
}
});

// Detecting which button is pressed.

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

// Checking Answer

function checkAnswer(currentlevel){
if(userClickedPattern[currentlevel]===gamePattern[currentlevel]){

if (userClickedPattern.length === gamePattern.length){

  setTimeout(function () {
    nextSequence();
  }, 1000);

}
}
else {
$("#level-title").text("Game Over,Press Any Key to Restart");
playSound("wrong");
document.querySelector("body").classList.add("game-over");
setTimeout(function(){
  document.querySelector("body").classList.remove("game-over");
},200);
gameOver();
};
}

// Game over

function gameOver(){
  level=0;
  gamePattern=[];
  started=false;
}

// Creating a random number.
function nextSequence(){
  userClickedPattern=[];
  level++;
  document.querySelector("#level-title").innerHTML="level "+level;

 var randomNumber= Math.floor(Math.random()*4);
randomChoosenColour=buttonColours[randomNumber];
gamePattern.push(randomChoosenColour);

$("#"+randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChoosenColour);

};


// Playing sound according to which  button is clicked.

function playSound(colorValue){
var sound = new Audio('sounds/'+colorValue+'.mp3');
sound.play();
};

// Creating Animation.

function animatePress(currentColor){
 document.querySelector("#"+currentColor).classList.add("pressed"); 
setTimeout(function(){
document.querySelector("#"+currentColor).classList.remove("pressed");
},100);
};


