const main = document.getElementsByClassName('container');
const content = document.getElementById('content');
const add = document.getElementById('add');
const contAdd = document.getElementsByClassName('ToDo');
const remove = document.getElementById('rmv')
const removeAll = document.getElementById('allRmv')

add.addEventListener('click', function (e) {
    let p = document.createElement('p');
    p.textContent = content.value;
    contAdd[0].appendChild(p);
    content.value = '';

})
remove.addEventListener('click', function () {
    const a = document.querySelector('p:last-child')
    a.remove();
})
removeAll.addEventListener('click', function () {
    contAdd[0].innerHTML = ''
})
