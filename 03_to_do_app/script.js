const date = document.querySelector('.date-container')
const taskStatus = document.querySelector('.taks-status')

const arrayLists = document.querySelectorAll('.todo-list')
const arraySubLists = document.querySelectorAll('.todo-sublist')

const checkMark = document.querySelectorAll('.check-mark')

checkMark.forEach((e) => {
    e.addEventListener('click', () => {
        console.log('check mark was clicked')
    })
})