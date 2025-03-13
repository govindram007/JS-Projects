let inp = document.querySelector("input");
let btn = document.querySelector("button");
let msg = document.querySelector("p");
let restart = document.querySelector(".restart");

const max = prompt("Enter the Max Number");

let random = Math.floor(Math.random() * max) + 1;

btn.addEventListener("click", ()=>{
   if(random == inp.value){
     msg.innerText = "Your Right!!"
    restart.innerText = "Reload to Restart the game"
   }else if(random < inp.value){
    msg.innerText = "Too Large!! try again."
   }else{
    msg.innerText = "Too Small!! Try again."
   }
})
