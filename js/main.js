function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function selection(play) {
  let result = "";
  if(play == 1) {
      result = "Rock 🥌";
  } else if (play == 2) {
      result = "Paper 🏬";
  } else if (play == 3) {
      result = "Scissor ✂";
  } else {
      result = "Not selection 🚫";
  }
  return result;
}

function play() {
  let player = pc = triumphs = losses = 0;
  
  while (triumphs < 3 && losses < 3) {
    pc = random(1,3);
    player = prompt("Choose: 1 for Rock (🥌), 2 for paper (🏬), 3 for scissor(✂)");
 
    alert("PC choose " + selection(pc));
    alert("Player choose " + selection(player));
    
    // Evaluation
    if (pc == player) {
      alert("TIE");
    } else if (player == 1 && pc == 3) {
      alert("WON");
      triumphs++;
    } else if (player == 2 && pc == 1) {
      alert("WON");
      triumphs++;
    } else if (player == 3 && pc == 2) {
      alert("WON");
      triumphs++;
    } else {
      alert("LOST");
      losses++;
    }
  }
  
  return "WINNER " + triumphs + " times. LOOSE " + losses + " times.";
  
}

//games
let result = "";
result = play();
let p = document.getElementById("result");
p.innerHTML = result;
