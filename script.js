let userSelection = null;
let round = 1;
let user_score = 0;
let computer_score = 0;
let totalRounds = 3;

const choices = ["Snake","Water","Gun"];

function selectChoice(choice) {
    userSelection = choice;
    document.getElementById("user-choice").textContent=choice;
    document.getElementById("round-result").textContent = "Ready to play!"
}

function play() {
    if (!userSelection){
        alert("Please select Snake, Water, or Gun first")
        return;
    }


if (round === 1){
    totalRounds = parseInt(document.getElementById("rounds").value);
    user_score = 0;
    computer_score = 0;
    document.getElementById("user-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;
}

const computerSelection = choices[Math.floor(Math.random()*choices.length)];
document.getElementById("computer-choice").textContent = computerSelection;

let result = "";

if(userSelection === computerSelection){
    result = "It's a draw!";
}else if (
    (userSelection==="Snake" && computerSelection==="Water") ||
    (userSelection==="Water" && computerSelection==="Gun") ||
    (userSelection==="Gun" && computerSelection==="Snake") 
){
    result = "You won this round!";
    user_score++;
}else{
    result = "Computer won!";
    computer_score++;
}

//show result
document.getElementById("round-result").textContent = result;
document.getElementById("user-score").textContent = user_score;
document.getElementById("computer-score").textContent = computer_score;
document.getElementById("round-num").textContent = round;

round++;

// Clear both choices for next round 
setTimeout(() => {
    document.getElementById("user-choice").textContent = "-";
    document.getElementById("computer-choice").textContent = "-";
  }, 500); // wait 1 sec to see choice before clearing


// Reset game after final round
if(round > totalRounds){
    setTimeout(() => {
        alert(`Game Over! Final Score:\nYou:${user_score} | Computer: ${computer_score}`);
        
        // Reset everything
        round = 1;
        user_score = 0;
        computer_score = 0;
        userSelection = null;

        document.getElementById("round-num").textContent = 1;
        document.getElementById("user-score").textContent = 0;
        document.getElementById("computer-score").textContent = 0;
        document.getElementById("user-choice").textContent = "-";
        document.getElementById("computer-choice").textContent = "-";
        document.getElementById("round-result").textContent = "Ready";
    },500);
}else {
    // Prepare for next round
    userSelection = null;
  }

}