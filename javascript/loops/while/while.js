// let count = 0;
// while(count < 10) {
//     count++
//     console.log(count)
// }

// const SECRET = "BabyHippo"

// let guess = prompt("Enter the code:")

// while (guess !== SECRET) {
//     guess = prompt("Enter the code:")
// }

// console.log("enter")

let input = prompt("Hey, say something")

while (true) {
    input = prompt(input);
    if (input === "stop") {
        break;
    }
}

console.log("you win")