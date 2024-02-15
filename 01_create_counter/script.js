// Constants 
const numbCont = document.querySelector('.num-container')
const subButton = document.querySelector('.sub')
const addButton = document.querySelector('.add')

// Basic functionality
let num = 0
subButton.addEventListener('click', () => {
    console.log('clicked')
    num -= 1
    numbCont.textContent = `${num}`
    return num
})

addButton.addEventListener('click', () => {
    console.log('clicked')
    num += 1
    numbCont.textContent = `${num}`
    return num
})

// document.body.onmousedown = () => {
//     console.log('something is happening')
// }

// document.body.onmouseup = () => {
//     console.log('something has stoped to happen')
// }