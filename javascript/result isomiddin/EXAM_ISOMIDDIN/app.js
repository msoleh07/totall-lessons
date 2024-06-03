const sing_up = document.querySelector('.sing_up')
let textq = document.querySelector('.textq')
let textw = document.querySelector('.textw')
let texte = document.querySelector('.texte')
let bak = document.querySelector('.bak')

function showdate() {
    sing_up.style.display = "block"
    sing_up.style.display = "flex"
    sing_up.style.align = "center"
    sing_up.style.justify = "center"
    header.style.display = "none"

}


// let email = "email"
// let password = "password"

// let demail = localStorage.getItem('email').valueOf
// let dpassword = localStorage.getItem('password').valueOf
// function blink(){
//     if (email == demail && password == dpassword){
//     alert("tugri")
//     }
//     else{
//         alert("notugri")
//     }
// }

function sing() {
    sing_up.style.display = "none"
}


function sing() {
    if (email.value == "isomiddin" && password.value == '123456789') {
        sing_up.style.display = "none"
    }
    else {
        email.style.borderColor = 'red'
        password.style.borderColor = 'red'
        orren.style.display = "bloc"
        input.style.value = "none"

    }
}


function blink() {
    bak.style.display.none
}


function blink() {
    if (email.value == "isomiddin" && password.value == '123456789') {
        bak.style.display = "none"
    }
    else {
        email.style.borderColor = 'red'
        password.style.borderColor = 'red'
        orren.style.display = "bloc"
        input.style.value = "none"

    }
}

function show() {
    bak.style.display = "block"
}






// =====================================================================
function showplus() {
    textq.style.display = "block"
    pi.style.color = "#FCA253"

}

function klik() {
    textq.style.display = "none"
    pi.style.color = "black"
}




function showplusq() {
    textw.style.display = "block"
    piq.style.color = "#FCA253"

}

function klikq() {
    textw.style.display = "none"
    piq.style.color = "black"
}




function showpluse() {
    texte.style.display = "block"
    pie.style.color = "#FCA253"

}

function klike() {
    texte.style.display = "none"
    pie.style.color = "black"
}