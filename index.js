let button=document.querySelectorAll(".btn");
let resetButton=document.querySelector(".reset-button");
let messageContainer=document.querySelector(".message-container");
let mainHeading=document.querySelector("#main-heading");
let turnO=true;

const positionArray=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



    button.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (turnO) {
            //playerO
            btn.innerText = "O";
            btn.style.color="black";
            turnO = false;
          } else {
            //playerX
            btn.innerText = "X";
            btn.style.color="brown";
            turnO = true;
          }
          btn.disabled = true;
          checkWinner();
        });
       
      });
      const checkWinner=()=>{
        for(let position of positionArray){
        //    console.log(position[0],position[1],position[2]) ;
          
           if(button[position[0]].innerText!="" && button[position[1]].innerText!="" && button[position[2]].innerText!="" ){
            if(button[position[0]].innerText===button[position[1]].innerText && button[position[0]].innerText===button[position[2]].innerText){
                console.log("we have a winner");
               console.log(button[position[0]].innerText);
              //  alert("winner is " +button[position[0]].innerText );
              messageContainer.innerHTML="winner is "+ `${button[position[0]].innerText}`
              // messageContainer.classList.remove("hide");
               Winner();
               mainHead();
              
            }
           }
        }
    }
const Winner=()=>{
    
    for(let position of positionArray){
        
          
          
            // button[position[0]].innerText=""; // clear all button values 
            // button[position[1]].innerText="";
            // button[position[2]].innerText="";  
            button.forEach((button)=>{
                button.disabled=true;
            })
           }
        }

resetButton.addEventListener("click",()=>{
  for(let position of positionArray){
    button[position[0]].innerText="";
    button[position[1]].innerText="";
    button[position[2]].innerText="";  
    messageContainer.innerHTML="";
    mainHeading.classList.add("hide");
    // messageContainer.classList.add("hide");
    button.forEach((button)=>{
        button.disabled=false;
    })
   }
})
function newGame(){
  for(let position of positionArray){
    button[position[0]].innerText="";
    button[position[1]].innerText="";
    button[position[2]].innerText="";  
    messageContainer.innerHTML="";
    mainHeading.classList.add("hide");
    // messageContainer.classList.add("hide");
    button.forEach((button)=>{
        button.disabled=false;
    })
   }
}
let mainHead=()=>{
mainHeading.classList.remove("hide");
}
