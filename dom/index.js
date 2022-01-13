const toDos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const list = document.getElementById('to-do-list');
    const toDosTemplate = toDos.map(t => '<li>' + t + '</li>');
    list.innerHTML = toDosTemplate.join('');
    const todoList = document.querySelectorAll('#to-do-list li');
    todoList.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento);
            toDos.splice(i, 1);
            actualizar(toDos);
            render();
        })
    })
}

const actualizar = (toDos) =>{
    const toDoString = JSON.stringify(toDos);
    localStorage.setItem('todos', toDoString);
}

window.onload = () =>{
    render();
    const form = document.getElementById('to-do-form');
    form.onsubmit = (e) =>{
        e.preventDefault();
        const toDo = document.getElementById('to-do');
        const toDoValue = toDo.value;
        toDo.value = '';
        toDos.push(toDoValue);
        actualizar(toDos);
        render();
        // ciclo for
        // list.innerHTML = '';
        // for (let i = 0; i < toDos.length; i++) {
        //     list.innerHTML += '<li>' + toDos[i] + '</li>';
        // }        
    }
}