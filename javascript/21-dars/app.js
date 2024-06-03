// const saveBtn = document.getElementById('save')

// // malumot saqlash uchun
saveBtn.addEventListener('click', () => {
    let lorem = "lorem ipsum dolor sit amet... "
    localStorage.setItem("data1", lorem)
})

// // -------------------------------------------------------
// // malumot o'chirish uchun
const deleteItem = document.querySelector('#deleteItem')

deleteItem.addEventListener('click', () => {
    localStorage.removeItem("data1")
})

// // -------------------------------------------------------
// // malumot olish uchun
// const h1 = document.querySelector('.h1')

function getData() {
    let word = localStorage.getItem("data1")
    h1.innerHTML = word
}
getData()

// // -------------------------------------------------------
// // xotirani tozalash uchun
// const clear = document.querySelector('.clear')

// clear.addEventListener('click', () => {
//     localStorage.clear()
// })


// ======================================================



const form = document.getElementById('form')
let nomi = document.querySelectorAll('form input')[0]
let narxi = document.querySelectorAll('form input')[1]
let address = document.querySelectorAll('form input')[2]
let rasmi = document.querySelectorAll('form input')[3]
let miqdori = document.querySelectorAll('form input')[4]

let AllData = JSON.parse(localStorage.getItem('allData')) || []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let newFood = {
        nomi: nomi.value,
        narxi: narxi.value,
        address: address.value,
        rasmi: rasmi.value,
        miqdori: miqdori.value
    }
    AllData.push(newFood)

    localStorage.setItem("allData", JSON.stringify(AllData))
    window.location.reload()
})


let zakazlar = document.querySelector('.zakazlar')
console.log(zakazlar);

function getData(data) {
    data.forEach(food => {
        let div = document.createElement('div')
        div.className = "zakaz_item"
        div.innerHTML = `
            <img src="${food.rasmi}" alt="">
            <p>nomi: <b>${food.nomi}</b> </p>
            <p>narxi: <b>${food.narxi} so'm</b> </p>
            <p>address: <b>${food.address}</b> </p>
            <p>miqdori: <b>${food.miqdori}ta</b> </p>
        `
        zakazlar.appendChild(div)
    })
}

getData(AllData)