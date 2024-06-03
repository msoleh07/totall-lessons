const API = "https://64da6002e947d30a260b2eee.mockapi.io/foods/allfoods"
const loader = document.querySelector('.loader')


function getData(api) {
    fetch(api)
        .then(javob => javob.json())
        .then(javob => showData(javob))
        .catch(xato => console.log(xato))
}

getData(API)
// ============================================================
const tbody = document.querySelector('table tbody')
function showData(data) {

    data.sort((a, b) => b.price - a.price)

    data.forEach((item, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${index + 1}</td>
                <td>${item.name.slice(0, 1).toUpperCase() + item.name.slice(1).toLowerCase()}</td>
                <td>${item.price}</td>
                <td>${item.where}</td>
                <td>${item.when}</td>
                <td style="background : ${item.active === "true" ? "green" : "red"} "></td>
                <td style="background : ${item.curer === "true" ? "green" : "red"}";</td>
                <td>
                    <button onclick="deleteItem('${item.id}')">Delete</button>
                </td>
        `

        tbody.appendChild(tr)
    })
}

// ============================================================
function deleteItem(id) {
    loader.style.display = "flex"
    fetch(API + "/" + id, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => {
            loader.style.display = "none"
            window.location.reload()
        })

}




// ============================================================
// CREATE
const form = document.querySelector('form')
let [pname, price, where, when, active, curer] = form.children

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (pname.value === "" ||
        price.value === "" ||
        where.value === "" ||
        when.value === "" ||
        active.value === "" ||
        curer.value === "") {
        return alert("belgilangan joylarni to'ldiring")
    }

    let neworder = {
        name: pname.value,
        price: price.value,
        where: where.value,
        when: when.value,
        active: active.value,
        curer: curer.value
    }

    loader.style.display = "flex"

    fetch(API, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(neworder)
    })
        .then(javob => console.log(javob))
        .catch(xato => console.log(xato))
        .finally(() => {
            loader.style.display = "none"
            window.location.reload()
        })

    pname.value = ""
    price.value = ""
    where.value = ""
    when.value = ""
    active.value = ""
    curer.value = ""

})
// ============================================================


