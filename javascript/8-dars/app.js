const hour = document.querySelector('.hour')
const minut = document.querySelector('.minut')
const second = document.querySelector('.second')

const day = document.querySelector('.day')
const month = document.querySelector('.month .number')
const year = document.querySelector('.year .number')



setInterval(() => {
    let vaqt = new Date()
    let soat = vaqt.getHours();
    let minutes = vaqt.getMinutes()
    let sec = vaqt.getSeconds();
    let kun = vaqt.getDate()
    let oy = vaqt.getMonth()
    let yil = vaqt.getFullYear()

    hour.innerHTML = soat;
    minut.innerHTML = minutes;
    second.innerHTML = sec;

    day.innerHTML = kun;
    month.innerHTML = oy
    year.innerHTML = yil

}, 1000)