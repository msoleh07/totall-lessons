// setTimeOut => berilgan vaqtdan song ishlaydi

// setTimeout(() => {
//     console.log("ok");
// }, 3000)

// -----------------------------------------

// setInterval => kiritilgan vaqt orasida ishlaydi

// let count = 0

// setInterval(() => {
//     count = count + 1
//     console.log(count);

// }, 1000)


// ---------------------------------------

// Date() => vaqtlarni olish uchun

// let vaqt = Date() // toliq vaqt
// let day = new Date().getDay() // kun hafta kuni
// let year = new Date().getFullYear() // yil
// let month = new Date().getMonth() // oy
// let hour = new Date().getHours() // soat
// let minut = new Date().getMinutes() // minut
// let second = new Date().getSeconds() // second


// console.log(second);


// =========================================
// CAROUSEL
const img = document.querySelector('.carousel img')

let images = [
    "https://wallpaperaccess.com/full/1120034.jpg",
    "https://cdn.wallpapersafari.com/53/21/ibBN90.jpg",
    "https://wallpapers-hub.art/wallpaper-images/377933.jpg",
    "https://cutewallpaper.org/22/1920x1200-nature-wallpapers/backgrounds-widescreen-dual-monitors-hd-wallpapers-best-wallpapers-desktop-nature-images-landscapes-1920x1200-full-hd-wallpapers.jpg"
]

let index = 0
img.src = images[index]

function nextImg() {
    index = index + 1
    img.src = images[index]

}

function prevImg() {
    index = index - 1
    img.src = images[index]
}


setInterval(() => {
    index = index + 1
    img.src = images[index]
}, 3000)