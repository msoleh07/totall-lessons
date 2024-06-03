// let str = "salom"
// let str = 9865
// let str = { age: 85 }
// let str = [8, 78, 786, 68,]
// let str = null
// let str = NaN
// let str = true
// console.log(typeof str);

// ===    ==

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// ------------------------------------------------

// while
// let num = 0
// while (num < 5) {
//     num++
//     console.log(num);
// }

// ------------------------------------------------

// do while

// let i = 0

// do {
//     i++
//     console.log(i);
// }
// while (i < 5)

// ------------------------------------------------

// for of   => array

// let students = [
//     "Isomiddin",
//     "Rahmatillo",
//     "Nurmuhammad",
//     "Muhammadsoleh",
//     "Abdurashid",
//     "Suhrobbek"
// ]

// const lists = document.getElementById('lists')

// for (let student of students) {
//     let li = document.createElement('li')
//     li.innerHTML = student
//     // console.log(li);
//     lists.appendChild(li)
// }



// for in ==> object

// let person = {
//     firstname: "Sardor",
//     lastName: "Raimjonov",
//     age: 21,
//     hasCar: false,
//     isMarried: false,
// }

// console.log(person);

// for (let key in person) {
//     console.log(person[key]);
// }


// ----------------------------------------------------------------
// const tbody = document.querySelector('tbody')
// let users = [
//     {
//         fname: "Isomiddin",
//         lname: "Muhammadov",
//         age: 13,
//         phoneNumber: 907511775,
//     },
//     {
//         fname: "Rahmatillo",
//         lname: "Mahmudjonov",
//         age: 14,
//         phoneNumber: 907607488,
//     },
//     {
//         fname: "Nurmuhammad",
//         lname: "Hamidov",
//         age: 13,
//         phoneNumber: 939279807,
//     },
//     {
//         fname: "Muhammadsoleh",
//         lname: "Turg'unov",
//         age: 16,
//         phoneNumber: 909976220,
//     },
//     {
//         fname: "Abdurashid",
//         lname: "Abdumutaliyev",
//         age: 14,
//         phoneNumber: 902220340,
//     },
//     {
//         fname: "Suhrobbek",
//         lname: "Saidamalov",
//         age: 13,
//         phoneNumber: 947681077,
//     }
// ]

// let index = 0
// for (let user of users) {
//     index = index + 1
//     let tr = document.createElement('tr')
//     let order = document.createElement('td')
//     let ismi = document.createElement('td')
//     let familiya = document.createElement('td')
//     let age = document.createElement('td')
//     let phoneNumber = document.createElement('td')
//     let birthyear = document.createElement('td')

//     order.innerHTML = index
//     ismi.innerHTML = user.fname
//     familiya.innerHTML = user.lname
//     age.innerHTML = user.age
//     phoneNumber.innerHTML = user.phoneNumber
//     birthyear.innerHTML = new Date().getFullYear() - user.age

//     tr.appendChild(order)
//     tr.appendChild(ismi)
//     tr.appendChild(familiya)
//     tr.appendChild(age)
//     tr.appendChild(phoneNumber)
//     tr.appendChild(birthyear)

//     tbody.appendChild(tr)
// }

// -------------------------------

// let index = 0
// for (let user of users) {
//     let tr = document.createElement('tr')
//     let order = document.createElement('td')
//     let fname = document.createElement('td')
//     let lname = document.createElement('td')
//     let age = document.createElement('td')
//     let phone = document.createElement('td')
//     let birthyear = document.createElement('td')

//     index++
//     order.innerHTML = index
//     fname.innerHTML = user.fname
//     lname.innerHTML = user.lname
//     age.innerHTML = user.age
//     phone.innerHTML = user.phoneNumber
//     birthyear.innerHTML = new Date().getFullYear() - user.age


//     tr.appendChild(order)
//     tr.appendChild(fname)
//     tr.appendChild(lname)
//     tr.appendChild(age)
//     tr.appendChild(phone)
//     tr.appendChild(birthyear)

//     tbody.appendChild(tr)
// }
// ----------------------------------------------------

const tbody = document.querySelector('tbody')
let users = [
    {
        fname: "Isomiddin",
        lname: "Muhammadov",
        age: 13,
        phoneNumber: 907511775,
    },
    {
        fname: "Rahmatillo",
        lname: "Mahmudjonov",
        age: 14,
        phoneNumber: 907607488,
    },
    {
        fname: "Nurmuhammad",
        lname: "Hamidov",
        age: 13,
        phoneNumber: 939279807,
    },
    {
        fname: "Muhammadsoleh",
        lname: "Turg'unov",
        age: 16,
        phoneNumber: 909976220,
    },
    {
        fname: "Abdurashid",
        lname: "Abdumutaliyev",
        age: 14,
        phoneNumber: 902220340,
    },
    {
        fname: "Suhrobbek",
        lname: "Saidamalov",
        age: 13,
        phoneNumber: 947681077,
    }
]

let index = 0
for (let user of users) {

    let tr = document.createElement('tr')
    let order = document.createElement('td')
    let name = document.createElement('td')
    let lname = document.createElement('td')
    let age = document.createElement('td')
    let phone = document.createElement('td')
    let birthyear = document.createElement('td')

    index++
    order.innerHTML = index
    name.innerHTML = user.fname
    lname.innerHTML = user.lname
    age.innerHTML = user.age
    phone.innerHTML = user.phoneNumber
    birthyear.innerHTML = new Date().getFullYear() - user.age

    tr.appendChild(order)
    tr.appendChild(name)
    tr.appendChild(lname)
    tr.appendChild(age)
    tr.appendChild(phone)
    tr.appendChild(birthyear)

    tbody.appendChild(tr)

    console.log(tr);
}