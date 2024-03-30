// date 
const dateContainer = document.querySelector('.date-container')
const date = new Date()

const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

let currentDate = `${day}/${month}/${year}`;
dateContainer.textContent = currentDate
console.log(currentDate)


// variables and array
const mainContainer = document.querySelector('.main-container')
const newTodoDoRef = document.querySelector('.todo-element')
let listNewTodo = []
let indexTodoElement
let todoElementSelected = false

// buttons
const createElement = document.querySelector('.create-element') // add button
const removElement = document.querySelector('.remove-element') // remove button

// init
listNewTodo.push(newTodoDoRef)
console.log(listNewTodo) //just for testing

// functions
function getText() { // prototype function, modify later
    // input text
    const inputTextContent = document.querySelector('#input-text-todo').value // text input for todo taks
    return inputTextContent
}

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

// element clic selection 
mainContainer.addEventListener('click', () => {
    listNewTodo.forEach(todoElement => {
        // console.log(todoElement)
        todoElement.addEventListener('click', () => { // single clic

            // cancel last selection
            listNewTodo.forEach(todoElement => {
                todoElement.style.background = 'white'
                todoElement.style.color = 'black'
            })
            // cancel last selection

            todoElementSelected = true // true selection element
            console.log(todoElementSelected) // selection testing

            todoElement.style.background = 'black'
            todoElement.style.color = 'white'
            indexTodoElement = listNewTodo.indexOf(todoElement) // get individual index element
            // console.log('a todo element was selected', todoElement, 'this is the index', indexTodoElement)
        })
        todoElement.addEventListener('dblclick', () => { // double clic
            console.log('SUUUUUUUU') // testing functionality
            todoElement.textContent = getText()
            todoElement.style.background = 'white'
            todoElement.style.color = 'black'

            // cancel selection
            indexTodoElement = undefined // debugging
            todoElementSelected = false
            // cancel selection
        })
    })
})

// remove element by index
removElement.addEventListener('click', () => {
    // console.log(listNewTodo[indexTodoElement])
    if (todoElementSelected === true) {
        listNewTodo[indexTodoElement].remove() // remove from DOM 
        listNewTodo.splice(indexTodoElement, 1) // remove from list
        indexTodoElement = undefined // debugging
        todoElementSelected = false
        console.log('a todo element was removed', listNewTodo) // just for testing
    }
    console.log(todoElementSelected) // selection testing
})



