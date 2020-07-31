var machineTaunts = [
  "Get GOOD! Noob!",
  "You cannot match me in intellect human!",
  "00110110110011001001, means GET RECKED in binary",
  "Machines are superior!",
];

var manScore = document.querySelector("#man-score");
var computerScore = document.querySelector("#machine-score");
var turnsPerGame = 5;
var winnerDisplay = document.querySelector(".winner");
var resetGame = document.querySelector("#retry");
var optionsBtn = document.querySelector("#player-options");
var btns = document.getElementsByClassName("select");

function compLogic() {
  let compOptions = ["rock", "paper", "scissors"];
  return compOptions[Math.floor(Math.random() * 3)];
}

function startGame(man, machine) {
  if (man == machine) {
    manScore.innerText = parseInt(manScore.innerText) + 1;
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    winnerDisplay.innerHTML = `<p style ="color:green">Its a Tie,Bro! You both chose: <b>${man}</b></p>`;
  } else if (man == `rock` && machine == `scissors`) {
    manScore.innerText = parseInt(manScore.innerText) + 1;
    winnerDisplay.innerHTML = `<p style ="color:blue">Can you smell what the Rock is cooking!?</p>`;
  } else if (man == `paper` && machine == `rock`) {
    manScore.innerText = parseInt(manScore.innerText) + 1;
    winnerDisplay.innerHTML = `<p style ="color:blue">Paper boy! is all about that paper boiii!</p>`;
  } else if (man == `scissors` && machine == `paper`) {
    manScore.innerText = parseInt(manScore.innerText) + 1;
    winnerDisplay.innerHTML = `<p style ="color:blue">Edward Scissor hands strikes again!</p>`;
  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    let randomTaunt = machineTaunts[Math.floor(Math.random() * 4)];
    winnerDisplay.innerHTML = `<p style ="color:red">${randomTaunt}</p>`;
  }
  console.log(turnsPerGame);
  turnsPerGame--;
  console.log(turnsPerGame);
}

function checkWinner(trys) {
  if (trys == 0) {
    let pPoints = parseInt(manScore.innerText);
    let cPoints = parseInt(computerScore.innerText);
    resetGame.style.visibility = "visible";

    for (let i = 0; i < btns.length; i++) {
      btns[i].setAttribute("disabled", "");
    }

    console.log(document.getElementsByClassName("select"));
    if (pPoints > cPoints) {
      winnerDisplay.innerHTML = `<p style = "font-size: 1.5rem; color:blue" >Man has proven himself to be superior to Machine, rejoyce!</p>`;
    } else if (pPoints < cPoints) {
      winnerDisplay.innerHTML = `<p style = "font-size:1.5rem;color:red" >The days of Man as the only rulers of this world,are numbered,Machine has privailed!</p>`;
    } else {
      winnerDisplay.innerHTML = `<p style = "font-size:1.5rem;color:hotpink" >Tis as Tie</p>`;
    }
  }
}

/*optionsBtn.addEventListener("click", function (e) {
  if (
    // e.target.classList.contains("fa") ||
    e.target.classList.contains("select")
  ) {
    let playerInput = e.target.getAttribute("id");
    let compInput = compLogic();
    startGame(playerInput, compInput);
    checkWinner(turnsPerGame);
  }
}); */

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    let playerInput = e.target.getAttribute("id");
    let compInput = compLogic();
    startGame(playerInput, compInput);
    checkWinner(turnsPerGame);
  });
}

resetGame.addEventListener("click", function (e) {
  resetGame.style.visibility = "hidden";
  let btns = document.getElementsByClassName("select");
  winnerDisplay.innerHTML = "Best out of 5";
  turnsPerGame = 5;
  manScore.innerText = 0;
  computerScore.innerText = 0;
  for (let i = 0; i < btns.length; i++) {
    btns[i].removeAttribute("disabled");
  }
});
