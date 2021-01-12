let max = parseInt(prompt("Enter the maximum number!"));


while (!max) {
   
        max = parseInt(prompt("Enter a valid number!"));
}


const targetNum = Math.floor(Math.random() * max) + 1
console.log(targetNum)

let guess = parse = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while(parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high! guess again")
    } else {
        guess = prompt("Too low! guess again")
    }
}

if (guess === "q") {
    console.log("OK, you quit") 

    } else {
        console.log(`Correct! It took you ${attempts} guesses`)
    }








