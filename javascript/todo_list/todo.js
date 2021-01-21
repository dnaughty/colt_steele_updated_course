
const list = []

let item = prompt("Add an item")


if(item === "end") {
    break;
} else {
    let item = prompt("Add an item");
    list.push(item)
}


console.log(list)