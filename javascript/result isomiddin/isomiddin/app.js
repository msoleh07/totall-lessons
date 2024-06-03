const klear = document.querySelector('.klear')
const kler = document.querySelector('.kler')
const search = document.querySelector('.search')
const ligin = document.querySelector('.ligin')
const login = document.querySelector('.login')
const blak = document.querySelector('.blak')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


blak.addEventListener("mousemove", dragging)

function showdata() {
    klear.style.display = "block"

}

function showdate() {
    kler.style.display = "block"

}

function shouv() {
    klear.style.display = "none"
}

function shouve() {
    kler.style.display = "none"
}

function classic() {
    search.style.display = "block"
}


function i() {
    search.style.display = "none"

}

const input = document.querySelector('input')
const ul = document.querySelector('ul')

function addToDo() {
    let todo = input.value
    let li = document.createElement("li")
    li.innerHTML = todo
    ul.appendChild(li)

    input.value = ""
}



function openloginl() {
    ligin.style.display = "block"
}

function ir() {
    ligin.style.display = "none"
}

function biar() {
    login.style.display = "block"
    ligin.style.display = "none"
}


function check() {
    if (email.value == "isomiddin" && password.value == '123456') {
        login.style.display = "none"
    }
    else {
        email.style.borderColor = 'red'
        password.style.borderColor = 'red'


    }
}