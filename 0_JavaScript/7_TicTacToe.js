let restart = document.querySelector("#btn");
let boxes = document.querySelectorAll(".Boxes");
let winHeading = document.querySelector("#win");
let msgContainer = document.querySelector(".hide");

let turno = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

function resetGame() {
    turno = true;
    enablebtn();
    msgContainer.classList.add("hide");
    winHeading.innerText = ""; // Reset winner text
}

restart.addEventListener("click", () => {
    resetGame();
});

const winner = (winner) => {
    winHeading.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
};

boxes.forEach((element) => {
    element.addEventListener("click", () => {
        if (turno) {
            element.innerText = "X";
            turno = false;
        } else {
            element.innerText = "O";
            turno = true;
        }
        element.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            winner(pos1Val);
            return;
        }
    }

    // Check for a draw
    if ([...boxes].every((box) => box.innerText !== "")) {
        winHeading.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disablebtn();
    }
};
