let addToDoButtom = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');

addToDoButtom.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value= "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDoButton.addEventListener('click', function(){
        paragraph.remove();
    });

});