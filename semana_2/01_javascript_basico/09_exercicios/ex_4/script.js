const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

// Nota: Tudo Form tem um comportamento padrão do navegador. Toda vez que um navegador recebe um submit
// a página é atualizada. Precisamos nesse momento prevenir aquele comportamento do navegador, para que
// a gente não perca os nossos dados. Enquanto o LocalStorage não seja utilizado.
newListForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const listName = newListInput.value
    if(listName === null || listName == '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return {id: Date.now().toString(), name: name}
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

// Nota: Uma função callback é uma função passada a otra função como argumento, que é então invocado
// dentro da função externa para completar algum tipo de rotina ou ação. Nessa função render, o primeiro
// argumento do forEach está recebendo uma função callback.
function render() {
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}