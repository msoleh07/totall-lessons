// compare operator
// <  kichik yoki katta
// >  kichik yoki katta
// ===   teng
// !==  teng emas


// console.log(8 !== 7);

// &&  va
// || yoki

// const h2 = document.querySelector('h2')
// const body = document.querySelector('body')

// let password = prompt("parolni kiriting!")
// if (password == 4578) {
//     h2.innerHTML = "sizga account ochamiz"
// }

// else {
//     alert("noto'g'ri")
//     body.style.opacity = "0"
// }

// --------------------------------
let day = new Date().getDay()

if (day === 1) {
    console.log("dushanba");
}
else if (day === 2) {
    console.log("seshanba");
}
else if (day === 3) {
    console.log("chorshanba");
}
else if (day === 4) {
    console.log("Payshanba");
}
else if (day === 5) {
    console.log("juma");
}
else if (day === 6) {
    console.log("shanba");
}
else if (day === 7) {
    console.log("yakshanba");
}
else {
    console.log("bunday kun yoq");
}


let age = prompt('yoshingizni kiriting?')

if (age > 18 || age === 18) {
    console.log("kirishingiz mumkin!");
}
else {
    console.log("ruxsat yo'q");
}

