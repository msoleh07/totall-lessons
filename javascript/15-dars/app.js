// for loop
const h2 = document.getElementById("word")
const ol = document.querySelector('ol')
let cars = [
    "Lexus",
    "damas",
    "tico",
    "tahoe",
    "nexia",
    "nexia",
]


// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

for (let start = 0; start < cars.length; start++) {
    let li = document.createElement('li')
    li.innerHTML = cars[start]
    ol.appendChild(li)
}