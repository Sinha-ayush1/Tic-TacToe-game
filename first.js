let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO = true;
const winpatterns=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box was clicked");
          if(turnO===true){//turn of O
            box.innerText="O";
            turnO=false;
          }
          else{
            box.innerText="X";    //turn of X
            turnO=true;
          }
          box.disabled=true;
          checkWinner();
        });
    });

    const disableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    const showWinner=(winner)=>{
        msg.innerText=`Congrats, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableboxes();
    }

 const checkWinner=()=>{
for(let patterns of winpatterns){

let pos1Val=boxes[patterns[0]].innerText;
let pos2Val=boxes[patterns[1]].innerText;
let pos3Val=boxes[patterns[2]].innerText;

if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        console.log("Winner",pos1Val);
        showWinner(pos1Val);
    }
}
}
};
 newgame.addEventListener("click",resetgame);
 
 reset.addEventListener("click",resetgame);