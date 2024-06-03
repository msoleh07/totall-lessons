// data types =>  2 turga bolinadi
//  1.  Primitive ==> string, number, null, NaN, Boolean, undefined,
//  2.  Reference ==> Object , array, function

// let h1 = document.querySelector('h1')
// const body = document.querySelector('body')

// let age = prompt("yoshingizni kiriting")
// let res = Number(age)

// switch (res) {
//     case 55:
//         h1.innerHTML = "sizning yoshingiz " + age + " da"
//         break;
//     case 45:
//         h1.innerHTML = "sizning yoshingiz " + age + " da";
//         break;
//     case 35:
//         h1.innerHTML = "sizning yoshingiz " + age + " da";
//         break;

//     default:
//         console.log("quyidagi yoshlarni kiriting ==> 55 , 45, 35");
//         body.style.background = "red"
// }


// 100 => grant
// 90 => kontrakt
// 70 => superkontrakt

// const h2 = document.querySelector('h2')
// let ball = 100

// switch (ball) {
//     case 70:
//         h2.innerHTML = "superkontrakt"
//         break;
//     case 90:
//         h2.innerHTML = "kontrakt"
//         break;
//     case 100:
//         h2.innerHTML = "Grand"
//         break;
//     default:
//         console.log("kirolmadiz");
// }





// 500     700     => 12 pro
// 700     900     => 13 pro
// 900     1300    => 15 pro 


const h2 = document.querySelector('h2')

let money = 402

if (money < 500) {
    console.log("pul kam")
}

if (money >= 500 && money <= 700) {
    h2.innerHTML = "12pro"
}

else if (money > 700 && money <= 900) {
    h2.innerHTML = "13Pro"
}

else {
    h2.innerHTML = "15Pro"
}