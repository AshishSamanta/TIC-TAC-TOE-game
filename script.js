let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnO= true;
const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner)=>{
    msg.innerText= `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (pattern of winPatterns){
        let pos1Val1  = boxes[pattern[0]].innerText;
        let pos2Val2  = boxes[pattern[1]].innerText;
        let pos3Val3  = boxes[pattern[2]].innerText;

        if (pos1Val1 != "" && pos2Val2 != "" && pos3Val3 != ""){
            if(pos1Val1 === pos2Val2 && pos2Val2 === pos3Val3){
                console.log("Winner is "+pos1Val1);
                showWinner(pos1Val1);
            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGames);