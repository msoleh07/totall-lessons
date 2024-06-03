const input = document.querySelector('input')
const ul = document.querySelector('ul')


function addToDo() {
    let todo = input.value
    let li = document.createElement("li")
    li.innerHTML = todo

    ul.appendChild(li)
    input.value = ""

    li.className = "list"
    console.log(li);


}