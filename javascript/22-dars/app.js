// API & Fetch
const API = "https://jsonplaceholder.typicode.com/users"

function getData(api) {
    fetch(api)
        .then(response => response.json())
        .then(response => showData(response))
        .catch(error => console.log(error))
}
getData(API)

// ------------------------------------------------
const tbody = document.querySelector('table tbody')
function showData(data) {
    data.forEach((user, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street}</td>
                <td>${user.phone}</td>
                <td>${user.company.name}</td>
        `
        tbody.appendChild(tr)

    });
}


