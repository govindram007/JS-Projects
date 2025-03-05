let user = document.querySelector(".user")

const max = prompt("Enter Maximum Number");
let rand = Math.floor(Math.random() * max) + 1;
let guess = prompt("Guess the number")

while(true){
    if(guess == "quit"){
        user.innerText = "User Quit this game"
        break;
    }
    if(guess == rand){
        user.innerText = `You are right!! computer generated ${rand}`
        break;
    }else if(guess > rand){
        guess = prompt("your number is to large try again");
    } else{
        guess = prompt("your number is too small try again");
    }
};