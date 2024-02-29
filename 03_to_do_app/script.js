const date = document.querySelector('.date-container')
const tasksStatus = document.querySelector('.tasks-status')

const arrayLists = document.querySelectorAll('.todo-list')
const arraySubLists = document.querySelectorAll('.todo-sublist')
const arrayCheckMark = document.querySelectorAll('.check-mark')

const createElement = document.querySelector('.create-element')
const removeElement = document.querySelector('.remove-element')

arrayCheckMark.forEach((e) => {
    e.addEventListener('click', () => {
        console.log('check mark was clicked')
        // the clicks are going to change the color of the check mark,
        // the color are going to be, red, orange and green        
    })
})

let num = 0 //just for testing
let arrayTodoNewDivs = []
function createDiv() {
    // create a new div element, this could be a class with methods.
    const newDiv = document.createElement("div")
    newDiv.style.background = 'white'
    newDiv.style.color = 'black'
    newDiv.style.width = '100px'
    newDiv.style.height = '100px'
    newDiv.textContent = num += 1
    newDiv.testId = num
    // insert element in the DOM 
    let parentElement = tasksStatus.parentNode
    parentElement.insertBefore(newDiv, tasksStatus.nextSibling)
    // append the object to an array(list)
    arrayTodoNewDivs.push(newDiv)
    console.log(newDiv.testId) // add unique ID, just for testing
}

createElement.addEventListener('click', () => {
    console.log('sup cutie')
    createDiv()
})

const removeEvents = ['click', 'dblclick']

removeEvents.forEach((event) => {
    removeElement.addEventListener(event, () => {
        console.log('bye cutie')
        // just for testing check the total of object in the array
        console.log(arrayTodoNewDivs, 'before remove')
        switch (event) {
            case 'dblclick':
                // remove all 
                arrayTodoNewDivs.forEach((div) => {
                    div.remove()
                })
                arrayTodoNewDivs = []
                console.log(arrayTodoNewDivs, 'afer remove') // just for testing
                break
            case 'click':
                // remove last element of the array "arrayTodoNewDivs" // needs to debug to avoid errors, using a condition
                arrayTodoNewDivs[arrayTodoNewDivs.length - 1].remove() // access to the last element of the array
                arrayTodoNewDivs.pop()
                console.log(arrayTodoNewDivs, 'afer remove') // just for testing
                break
        }
    })
})


// this removes all the divs in the list in one go:
// arrayTodoNewDivs.forEach((div) => {
//     div.remove() // #! remove the index of the element that this removes
//     // remove element from list avoiding mutaition and also find out the
//     // index of the element that we are removing #!
// })

