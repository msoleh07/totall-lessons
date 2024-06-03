const screen = document.querySelector('.screen')

let count = 0

function increment() {
    count = count + 1
    screen.innerHTML = count
}

function reset() {
    count = 0
    screen.innerHTML = count
}
