// variables and array
const mainContainer = document.querySelector('.main-container')
const newTodoDoRef = document.querySelector('.todo-element')
let listNewTodo = []
let indexTodoElement

// buttons
const createElement = document.querySelector('.create-element') // add button
const removelement = document.querySelector('.remove-element') // remove button

listNewTodo.push(newTodoDoRef)
console.log(listNewTodo) //just for testing

// const firstElement = document.querySelector('.todo-sublist')
// listElementsArray.push(firstElement) // there is a bug here, afte deleting all the elements in the array i can't create a new "todo element"
// // element selection
// let todoSelected = false

// functions 

function cloneBlockCode() {
    const cloneTodoElement = newTodoDoRef.cloneNode(true)
    // console.log('a new todo element was cloned', cloneTodoElement) //just for testing
    return cloneTodoElement
}
function appendTodoElementDOM() {
    const parentElement = newTodoDoRef
    const newCloneTodoElement = cloneBlockCode() // this is the element that i'm going to "append"
    newCloneTodoElement.style.background = 'white'
    // insert element in the DOM
    let parentElementPosition = parentElement.parentNode
    parentElementPosition.insertBefore(newCloneTodoElement, parentElement.nextSibling)
    // append the object to an array(list)
    listNewTodo.push(newCloneTodoElement)
    console.log('a new todo element was appended into the DOM')
    console.log(listNewTodo)
}

// eventlisteners
createElement.addEventListener('click', () => {
    appendTodoElementDOM()

})

// element individual click selection 
mainContainer.addEventListener('click', () => {
    listNewTodo.forEach(todoElement => {
        todoElement.addEventListener('click', () => {
            todoElement.style.background = 'black'
            todoElement.style.color = 'white'
            indexTodoElement = listNewTodo.indexOf(todoElement) // get individual index element
            console.log('a todo element was selected', todoElement, 'this is the index', indexTodoElement)
        })
    })
})

// remove element by index
removelement.addEventListener('click', () => {
    // console.log(listNewTodo[indexTodoElement])
    listNewTodo[indexTodoElement].remove() // remove from DOM 
    listNewTodo.splice(indexTodoElement, 1) // remove from list
    console.log('a todo element was removed', listNewTodo) // just for testing
    // if (todoSelected === true) {
    //     e.remove()
    //     todoSelected = false
    //     console.log(todoSelected)
    // }
})

// // maybe get the index of the element selected, and with that index delete the item
// const mainContainer = document.querySelector('.main-container')
// mainContainer.addEventListener('click', () => {
//     listElementsArray.forEach((element) => {
//         element.addEventListener('click', () => {
//             element.style.background = 'black'
//             element.style.color = 'white'
//             todoSelected = true
//             console.log(todoSelected)
//             // let text = prompt('write something: ')
//             // element.textContent = text
//         })
//     })
// })


// ---- element selection
// listNewTodo.forEach((todoElement) => {
//     todoElement.addEventListener('click', () => {
//         listNewTodo = []
//     })