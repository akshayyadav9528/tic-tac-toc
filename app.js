let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelectorAll("#reset");
let newgamebtn = document.querySelectorAll("#new-btn");
 let mgscontainer = document.querySelector(".mgs-container");
 let mgs = document.querySelector("#mgs");
 let turn = true;
const winner = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
    if(turn === true){
      box.innerText = "o";
      turn = false;
    }
    else{
        box.innerText = "x";
        turn = true;
    }
    box.disabled = true;
    checkwinner();
    });   
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};      

const reset = () => {
    turn = true;
    enableboxes();
    mgscontainer.classList.add("hide");
};

const showWinner = (winner) => {
    mgs.innerText = "congratulation , you win", winner;
    mgscontainer.classList.remove("hide");
    disableboxes();
}; 

const checkwinner = () => {
    for (let pattern of winner){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        //  );
      let p1val = boxes[pattern[0]].innerText
      let p2val = boxes[pattern[1]].innerText
      let p3val = boxes[pattern[2]].innerText
      if(p1val != "" && p2val != "" && p3val != ""){
        if(p1val === p2val && p2val === p3val){
            console.log("we get winner",p3val);
             showWinner(p1val);
            
        }
      }

    }
};
newgamebtn.addEventListener("click",reset);

//  newganebtn.addEventListener("click",reset => {
//     console.log("box was clicked");
//  });
   resetbtn.addEventListener("click",reset);

