const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid; 
const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];


// let initialized the game

function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    newGameBtn.classList.remove("active");
    gameinfo.innerText = `Current Player -${currentPlayer} `;

}

initGame();
function swapTurn(){
    if(currentPlayer=="X"){
        currentPlayer ="O";

    }else{
        currentPlayer = "X";
    }

    // UI UPDATE
    gameinfo.innerText = ` Current Player -${currentPlayer}`;
}


function handleClick(index){
    if(gameGrid===""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index] = currentPlayer;  
        boxes[index].style.pointerEvents = "none";
        
        // swap turn

        swapTurn();

        // check game over or win
        checkGameOver();
    }

}



boxes.forEach((box, index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })

});




