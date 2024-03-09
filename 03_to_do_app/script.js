const testParent = document.querySelector('.features-container')
function createList() {
    const newDiv = document.createElement("div")
    newDiv.style.background = 'white'
    newDiv.style.color = 'black'
    newDiv.style.width = '100px'
    newDiv.style.height = '100px'
    // insert element in the DOM
    let parentElement = testParent.parentNode
    parentElement.insertBefore(newDiv, testParent.nextSibling)
    // append the object to an array(list)
    listElementsArray.push(newDiv)
}

let todoListClick = false
const todoList = document.querySelector('.todo-list')
todoList.addEventListener('click', () => {
    console.log('todoList')
    todoListClick = true

})


let todoSublistClick = false
const todoSublist = document.querySelector('.todo-sublist')
todoSublist.addEventListener('click', () => {
    console.log('todoSublist')
    todoSublistClick = true

})

let listElementsArray = []
let sublistElementsArray = []
const createElement = document.querySelector('.create-element')
createElement.addEventListener('click', () => {
    if (todoListClick === true) {
        createList()
    } else if (todoSublistClick === true) {
        createList()
    }
    todoListClick = false
    todoSublistClick = false
})

const removelement = document.querySelector('.remove-element')
removelement.addEventListener('click', () => {
    if (todoListClick === true) {
        createList()
        listElementsArray.forEach((e) => {
            e.remove()
        })
    } else if (todoSublistClick === true) {
        createList()
    }
    todoListClick = false
    todoSublistClick = false
})

// arrayCheckMark.forEach((e) => {
//     e.addEventListener('click', () => {
//         console.log('check mark was clicked')
//         // the clicks are going to change the color of the check mark,
//         // the color are going to be, red, orange and green
//     })
// })

// // let num = 0 //just for testing
// // let arrayTodoNewDivs = [] // add limit to the number of objects
// // function createDiv() {
// //     // create a new div element, this could be a class with methods.
// //     const newDiv = document.createElement("div")
// //     newDiv.style.background = 'white'
// //     newDiv.style.color = 'black'
// //     newDiv.style.width = '100px'
// //     newDiv.style.height = '100px'
// //     newDiv.textContent = num += 1
// //     newDiv.testId = num
// //     // insert element in the DOM
// //     let parentElement = tasksStatus.parentNode
// //     parentElement.insertBefore(newDiv, tasksStatus.nextSibling)
// //     // append the object to an array(list)
// //     arrayTodoNewDivs.push(newDiv)
// //     console.log(newDiv.testId) // add unique ID, just for testing
// // }

// // clone block of code: // i think is better cloning the element // append them into a list and be able to remove all and create more, etc, add more functionalities as selection
// let arrayTodoCloneBlock = []
// function cloneDiv() {
//     let parent = document.querySelector('.todo-main-container')
//     let refElement = parent.querySelector('.todo-sublist')
//     let blockClone = refElement.cloneNode(true)
//     // insert parent in the DOM
//     let refParent = parent.parentNode
//     refParent.insertBefore(blockClone, parent.nextSibling)
//     // append the object in a list
//     arrayTodoCloneBlock.push(blockClone)

// }
// // -------------------------------------------------------------------
// createElement.addEventListener('click', () => {
//     cloneDiv()
//     console.log(arrayTodoCloneBlock, 'new object was added')
// })

// const removeEvents = ['click', 'dblclick']
// removeEvents.forEach((event) => {
//     removeElement.addEventListener(event, () => {
//         // just for testing check the total objects in the array
//         console.log(arrayTodoCloneBlock, 'before remove')
//         switch (event) {
//             case 'dblclick':
//                 // remove all
//                 arrayTodoCloneBlock.forEach((block) => {
//                     block.remove()
//                 })
//                 arrayTodoCloneBlock = []
//                 console.log(arrayTodoCloneBlock, 'afer remove') // just for testing
//                 break
//             case 'click':
//                 // remove last element of the array "arrayTodoCloneBlock" // needs to debug to avoid errors, using a condition
//                 arrayTodoCloneBlock[arrayTodoCloneBlock.length - 1].remove() // access to the last element of the array
//                 arrayTodoCloneBlock.pop()
//                 console.log(arrayTodoCloneBlock, 'afer remove') // just for testing
//                 break
//         }
//     })
// })

