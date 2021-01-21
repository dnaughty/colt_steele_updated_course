let input = prompt("what would you like to do?")

const todos = ['collect eggs', 'change litter box']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("******************")
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************")
    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todos.push(newTodo)
        console.log(`${newTodo} Added`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log('unknown index')
        }
    }
    input = prompt("what would you like to do?")
}

// console.log(todos)

console.log("OK Quit")
