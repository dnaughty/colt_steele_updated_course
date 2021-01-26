// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }

// const add = function(x,y) {
//     return x + y;
// }

// let greet = function() { console.log("HI")}

function callTwice(func) {
    func();
    func();

}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}