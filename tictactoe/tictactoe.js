/*variable */
var currentPlayer = "X";
var gameBoard = ["" , "" , "" , "" , "" , "" , "" , "", "" ];
var gameActive = true;
var xWinCounter = 0;
var yWinCounter= 0;
const winningPosibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

/* tratam apasarea unui buton de catre jucator */
function handleSelectedButton(buton) {
    const selectedButton= buton.target;
    console.log("buton apasat: " + selectedButton);
    const selectedButtonIndex = parseInt(selectedButton.id);

    if (gameBoard[selectedButtonIndex] !== "" || !gameActive) {

        return;
    }

    gameBoard[selectedButtonIndex] = currentPlayer;
    selectedButton.innerHTML = currentPlayer;
    nextPlayerMove();
    gameCheck();
}

/* tratam schimbarea mutarii de la un jucator la altu*/
function nextPlayerMove() {
    if(currentPlayer === "X"){
        currentPlayer = "0"
        document.getElementById("player-turn").innerHTML = "Current Player Turn: 0"
    } else {
        currentPlayer = "X"
        document.getElementById("player-turn").innerHTML = "Current Player Turn: X"
    }
};

/* pornim logica completa a jocului, verificam dupa fiecare click daca exista vreun castigator*/
function gameCheck(){
    for(i = 0; i < 8; i++){
        let currentCombination = winningPosibilities[i];
        let a = gameBoard[currentCombination[0]];
        let b = gameBoard[currentCombination[1]];
        let c = gameBoard[currentCombination[2]];
        if(a === b && b === c && a === 'X'){
            alert("X has won!");
            gameActive = false;
            xWinCounter++;
            document.getElementById(currentCombination[0]).style.backgroundColor = 'green';
            document.getElementById(currentCombination[1]).style.backgroundColor = 'green';
            document.getElementById(currentCombination[2]).style.backgroundColor = 'green';
            document.getElementById("xWinnerCounter").innerHTML = "Games won by Player X:" + xWinCounter;
            break;
            
        } else if(a === b && b === c && a === '0'){
            alert("0 has won!");
            gameActive = false;
            yWinCounter++;
            document.getElementById(currentCombination[0]).style.backgroundColor = 'green';
            document.getElementById(currentCombination[1]).style.backgroundColor = 'green';
            document.getElementById(currentCombination[2]).style.backgroundColor = 'green';
            document.getElementById("yWinnerCounter").innerHTML = "Games won by Player Y:" + yWinCounter;
            break;
        } else {
            continue;
        }
    }
    if(!gameBoard.includes("") && gameActive){
        alert("It's a draw!");
        gameActive = false;
    }
}

/* adaugam functia de apasarea a unui buton, fiecarui dintre cele 9 butoane*/
for (i = 0; i < 9; i++){
    document.getElementById(i).onclick = handleSelectedButton;
};

/* adaugam functia de reset a jocului butonului cu acelasi nume*/
document.getElementById("reset-button").onclick = resetGame;


/* tratam posibilitatea in care se doreste resetarea jocului in care resetam valorile variabilelor de jucator, tabla de joc si culoarea butoanelor castigatoare */
function resetGame(){
    currentPlayer = "X";
    gameBoard = ["" , "" , "" , "" , "" , "" , "" , "", "" ];
    gameActive = true;
    for(i = 0; i < 9; i++){
        document.getElementById(i).innerHTML="";
        document.getElementById(i).style.backgroundColor= 'grey';
    }
    document.getElementById("player-turn").innerHTML = "Current Player Turn: X";
}