const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const board = document.querySelector('#board')
const timeEl = document.querySelector('#time')
const reset = document.querySelector('.reset')
const colors = ['#53a39b','#337a73','#183d3a','#32d1c4', '#0f7b99', 'purple']
let time = 0
let score = 0

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()       
    }
})
startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'))
        startGame()
    screens[1].classList.add('up')

    }
})
function startGame() {
    setInterval(timeUpdate, 1000)
    setTime(time)
    createRandomCircle()
}

function timeUpdate() {
    if (time === 0) {
        finishGame()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
    setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame(){
    board.innerHTML = `<h1>Score: <span class = "primary">${score}</span></h1>`
    timeEl.parentNode.classList.add('hide')
    reset.style.display = 'block'
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background =  getRandomColor()


    board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min) 
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index] 
 }

