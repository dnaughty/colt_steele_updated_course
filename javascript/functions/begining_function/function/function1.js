// function sing(){

//     console.log("Doe");
//     console.log("Re");
//     console.log("Mi");

// }

// sing()

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}!`)
// }

// greet("Denis", "Naughton")

// function repeat(str, numtimes) {
//     let result = '';
//     for(let i = 0; i < numtimes; i++){
//         result += str;
        
//     }

//     console.log(result)
// }

// repeat("hi",5)

function add(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }

    let sum = x + y;
    return sum
}

add(4,5)
add("denis",3)