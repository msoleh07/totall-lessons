const h1 = document.querySelector("h1")
const mp3 = document.querySelector('audio')

let phones = [
    "90-751-17-75",
    "93-927-98-07",
    "90-222-03-40",
    "90-997-62-20",
    "91-760-74-88",
    "93-911-95-72",
]

const myInterval = setInterval(generate, 100);
function generate() {
    let randomNumber = Math.random() * phones.length
    let butun = Math.floor(randomNumber)
    h1.innerHTML = phones[butun]
    h1.style.opacity = 1
}

function stopFunction() {
    clearInterval(myInterval);
    mp3.play()
    h1.style.fontSize = "14vw"
}
