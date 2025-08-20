let boxes=document.querySelectorAll(".Box");
let resBtn=document.querySelector("#resB");
let newBtn=document.querySelector("#newB");
let msg=document.querySelector("#msg");


let player=true;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

let count=0;

boxes.forEach((box)=>{

    box.addEventListener("click", () => {
    console.log("Box was clicked");

    if(player){

        box.innerText="X";
        box.style.color="blue";
        box.style.fontSize="40px";
        player=false;

    }else{

        box.innerText="O";
        box.style.color="orange";
        box.style.fontSize="40px";
        player=true;

    }
    box.disabled=true;
    count++;

    let isWinner=checkWinner();

    if(count ===9 && !isWinner){
        gameDraw();
    }
    });
});



const checkWinner =() => {
    for (let pattern of winPattern){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return true;    
            }
        }
    }
    return false;

};



const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    boxes.forEach((box) => {
        box.disabled=true;
    });
}



const gameDraw=() =>{
    msg.innerText="It's a Draw!";
};



const resetGame=()=>{
    player=true;
    count=0;
    msg.innerText="";
    boxes.forEach( box=>{
        box.innerText="";
        box.disabled=false;

    });

};

resBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
