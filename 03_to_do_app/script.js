// variables 
let listElementsArray = [] // i'm going to use this to store the new todo elements created 
const firstElement = document.querySelector('.todo-sublist')
listElementsArray.push(firstElement)


function cloneBlockCode() {
    const node = document.querySelector('.todo-sublist') // this is the element that I'm going to clone
    const clone = node.cloneNode(true)
    console.log(clone)
    return clone
}
function createList() {
    const testParent = document.querySelector('.todo-sublist') // the clone element is goint to be created below this parent element
    const newDiv = cloneBlockCode() // this is the element that i'm going to "append"
    newDiv.style.background = 'white'
    // insert element in the DOM
    let parentElement = testParent.parentNode
    parentElement.insertBefore(newDiv, testParent.nextSibling)
    // append the object to an array(list)
    listElementsArray.push(newDiv)
}

const createElement = document.querySelector('.create-element')
createElement.addEventListener('click', () => {
    createList()
})

const removelement = document.querySelector('.remove-element')
removelement.addEventListener('click', () => {
    listElementsArray.forEach((e) => {
        e.remove()
    })
})


const mainContainer = document.querySelector('.main-container')
mainContainer.addEventListener('click', () => {
    listElementsArray.forEach((element) => {
        element.addEventListener('click', () => {
            let text = prompt('write something: ')
            element.textContent = text
        })
    })
})
