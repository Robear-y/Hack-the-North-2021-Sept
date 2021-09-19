function showAlert (clicked_id) {
  
  reRenderKing(clicked_id);
};

function endGame(){
  var values = [queen, rock, horse, king, pawn, bishop,illegal];
  var maxIndex = 0;

  for (var i = 1; i < values.length; i++) {
    if (values[maxIndex] < values[i]) {
      maxIndex = i;
    }
  }
  if(maxIndex==0){
    if(queen==bishop){
      maxIndex=5;
    } 
    else if(queen==rock){
      maxIndex=1;
    } 
    else if(queen==king){
      maxIndex=3;
    }
  }
  if(maxIndex==3){
    if(king==pawn){
      maxIndex=4;
    }
  }
  if(values[maxIndex] == 0){
    maxIndex = 7;
  }
  switch(maxIndex) {
    case 0:
      alert("You are most like a queen. You are a natural leader! You enjoy taking charge of the team and ensuring the job gets done in a highly efficient manner. You exert great pressure accross the whole board, and everyone works for you. Decent life honestly.");
      break;
    case 1:
      alert("You are most like a rook. The vanguard of the team. You're strong and versatile, second only to the Queen. You are good at anticipated challenges from afar, and will take action to bring victory to your comrades. You also have this thing going on with the king where you switch places, which is pretty cool I guess.");
      break;
    case 2:
      alert("You are most like a knight. You move around the board with ease, hopping gracefully over other pieces with ease. Your movement is called unorthodox by the jealous bishops, but you know that you are the coolest piece on the board B).");
      break;
    case 3:
      alert("You are most like a king. You are deemed to be the most important yet in reality you merely hide behind your teammates and like to be shielded from reality. You prefer letting others take charge and will only take action if all else fails in your team.");
      break;
    case 4:
      alert("You are most like a pawn. Your movements are slow, but you move forward with purpose. Sadly, you are worth the least of the other pieces, so you get to die first. Unlucky. Hopefully, you can make it to the other side.");
      break;
    case 5:
      alert("You are most like a bishop. You regally move down the diagonals and swiftly take down foes from great distances. You are closest to the king and queen, which youy take great pride in. However, you are quite narrow minded and cannot even move to different colors.");
      break;
    case 6:
      alert("You've clearly stumbled upon the wrong game, please learn how to move chess pieces before coming back to this quiz.");
      break;
    case 7:
      alert("You think you're so smart huh? Not moving the piece and asking what piece you are like the most? Well the answer would probably be the king. BUT STILL you were supposed to go move around the pieces and stuff. How lazy can you be? Come on now, give the piece a couple moves.");
      break;
    default:
    alert("KEKW");
  }
    
};

var table = document.getElementById("boardy");
if(table == null){
}
var img = document.createElement("IMG"); //create the image
img.setAttribute("src", "/king.png");
img.setAttribute("class", "king");

var row = 3, column = 3;
var newRow = 3, newColumn = 3;
var currentCell;

var pawn = 0;
var horse = 0;
var bishop = 0;
var queen = 0;
var rock = 0;
var king = 0;
var illegal = 0;

renderKing();

function renderKing (){
  currentCell = table.rows[row].cells[column];
  currentCell.appendChild(img);
}

function reRenderKing (id){
  var intID = parseInt(id);
  addScore (intID);
  currentCell.removeChild(img);
  row = Math.floor(intID /10);
  column = intID%10;
  currentCell = table.rows[row].cells[column];
  currentCell.appendChild(img);
}

function addScore (id) {
  newRow = Math.floor(id /10);
  newColumn = id%10;
  console.log("r:"+ row +"  c:"+column + "\n nr:"+ newRow + " nC:" + newColumn)

  if(newRow == row){
    if(Math.abs(newColumn-column) == 1){
      king ++;
      console.log("king");
    }

    queen++;
    rock++;
    console.log("rockquen")
  }
  else if(newColumn == column){
    if (newRow-row == -1){
      pawn++;
      console.log("pawn")
    }
    if(Math.abs(newRow-row) == 1){
      king ++;
      console.log("king")
    }
    queen++;
    rock++;
    console.log("rockquen")
  }
  else if (Math.abs(newRow-row) == Math.abs(newColumn-column)){
    if(Math.abs(newRow-row) == 1 || Math.abs(newColumn-column) == 1){
      king++;
      console.log("king")
    }
    bishop++;
    queen++;
    console.log("bishop queen")
  }
  else if (Math.abs(newRow-row) == 2 && Math.abs(newColumn-column) == 1 || Math.abs(newRow-row) == 1 && Math.abs(newColumn-column) == 2){
    horse++;
    console.log("horse")
  }
  else {
    console.log("illegal :0");
    illegal++;
  }

  
}
