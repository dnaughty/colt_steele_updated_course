
// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5")
//     console.log(random);
// }

// const dayOfTheWeek = prompt('Enter a Day')

// if (dayOfTheWeek == 'Monday') {
//     console.log("I hate Monday")
// } else if (dayOfTheWeek == 'Saturday') {
//     console.log("Yay!")
// } else if (dayOfTheWeek == "Friday") {
//     console.log("great")
// } 

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("No spaces!");
} else {
    console.log("valid");
}
} else {
    console.log("Too Short");
}