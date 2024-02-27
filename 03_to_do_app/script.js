const createElement = document.querySelector('.create-element')
const removeElement = document.querySelector('.remove-element')
const checkMark = document.querySelectorAll('.check-mark')

createElement.addEventListener('click', () => {
    console.log(createElement)
})

removeElement.addEventListener('click', () => {
    console.log(removeElement)
})

checkMark.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.background = 'red'
        console.log(e)
    })
})

