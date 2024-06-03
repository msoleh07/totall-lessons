const h1 = document.querySelector('h1')
let ism = "Events"
// -----------------------------------------------------------

const btn1 = document.querySelector("#press")

btn1.addEventListener('click', clickFunction)

function clickFunction() {
    h1.innerHTML = "click"
}
// ------------------------------------------------------------

const dblClick = document.querySelector('.dblClick')

dblClick.addEventListener('dblclick', () => {
    h1.innerHTML = "double click"
})

// ------------------------------------------------------------
const btn3 = document.querySelector('.btn3')
btn3.addEventListener('mouseenter', () => {
    h1.innerHTML = "salom"
    btn3.style.background = "red"
})

// ------------------------------------------------------------
const btn4 = document.querySelector('.btn4')

btn4.addEventListener('mouseleave', () => {
    h1.innerHTML = "mouse Leave"
})

// ------------------------------------------------------------
const move = document.querySelector('.move')

move.addEventListener('mousemove', () => {
    console.log(1);
})

// ------------------------------------------------------------
const mouseUp = document.querySelector('.mouseUp')
mouseUp.addEventListener('mouseup', () => {
    mouseUp.textContent = "changed"
})

// ------------------------------------------------------------
const h2 = document.querySelector('h2')
const input = document.querySelector('#input1')

function showValue() {
    h2.innerHTML = input.value
}
