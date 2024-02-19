let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let win = document.querySelector(".msg-container");
let newGamebtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let turn = true;
const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((val)=>{
    val.addEventListener("click", () =>{
        if(turn == true){
            val.innerText = "X";
            turn = false;
        }
        else{
            val.innerText = "O";
            turn = true;
        }
        val.disabled = true;
        checkWinner();
    })
}); 

const resetgame = () =>{
    turn = true;
    enablebtn();
    win.classList.add("hide");
}

const disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    win.classList.remove("hide");
    disablebtn();
}


const checkWinner = () =>{
    for( let pat of winningPattern){
        let posVal1 = boxes[pat[0]].innerText;
        let posVal2 = boxes[pat[1]].innerText;
        let posVal3 = boxes[pat[2]].innerText;
        if(posVal1 !== "" && posVal2 !== "" && posVal3 !== ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                console.log("WINNER ", posVal1);
                showWinner(posVal1);
            }
        }
    }
}
resetbtn.addEventListener("click", resetgame);
newGamebtn.addEventListener("click", resetgame);
