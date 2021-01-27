// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// const add = function(x,y) {
//     return x + y;
// }

// let greet = function() { console.log("HI")}

// function callTwice(func) {
//     func();
//     func();

// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function makeMysteryFunc(num) {
//     // const rand = Math.random();
//     if(num > 10){
//         return function() {
//             console.log("Congrats, I'm a good function!")
//         }
//     } else {
//         return function() {
//             alert("Virus!")
//             alert("Don't close")
//             alert("Don't close")
//             alert("Don't close")
//         }
//     }
// }

// function isBetween(min,max,num) {
//     if(num >= min && num <= max){
//         console.log(`The ${num} is between ${min} and ${max}`)
//     }else{
//         console.log("not between")
//     }

// }

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

const myMath = {
    PI: 314159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}


