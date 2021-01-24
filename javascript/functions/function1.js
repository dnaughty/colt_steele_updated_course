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

function repeat(str, numtimes) {
    let result = '';
    for(let i = 0; i < numtimes; i++){
        result += str;
        
    }

    console.log(result)
}

repeat("hi",5)