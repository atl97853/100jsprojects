// Constants 
const numbCont = document.querySelector('.num-container')
const subButton = document.querySelector('.sub')
const addButton = document.querySelector('.add')

// Basic functionality
let num = 0

subButton.addEventListener('click', () => {
    num -= 1
    numbCont.textContent = `${num}`

    passText = false
    console.log(passText) //testing
})

addButton.addEventListener('click', () => {
    num += 1
    numbCont.textContent = `${num}`

    passText = false
    console.log(passText) //testing
})

let passText = false
numbCont.addEventListener('click', () => {
    passText = true
    console.log(passText) //testing

    if (passText) { //>= 3 ??
        newNumber = ''
    }
})

// addEventListener('keypress', ({ key }) => {
//     if (passText && !isNaN(key)) {
//         console.log(key)
//         num = Number(key)
//         numbCont.textContent = `${num}`
//         passText = false
//         console.log(passText) //testing
//     }
// })

// need to input newNumber after press enter key
let newNumber = '' //why zeros doesnt repeat ?????
addEventListener('keypress', ({ key }) => {
    if (passText && !isNaN(key) && newNumber.length <= 2) { //<= 3????
        newNumber += key
        console.log(newNumber)

        num = Number(newNumber)
        numbCont.textContent = `${num}`
        // passText = false
        // console.log(passText) //testing
        console.log(newNumber.length)
    }
})


