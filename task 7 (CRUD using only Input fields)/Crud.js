let data = []

document.getElementById('add').addEventListener('click', function () {
    const inp = document.getElementById('inp').value
    if (inp == '') {
        alert('Please enter string Not empty ""')
    }
    else {
        data.push(inp)
        const jsonFile = JSON.stringify(data)
        localStorage.setItem('Data', jsonFile)
        inp.value = ''
        alert('Data Add successfully')
    }
})
// display all the data form localStorage

document.getElementById('display').addEventListener('click', function () {
    const contentBro = document.querySelector('.data');
    let data = [];
    let StringFile = localStorage.getItem('Data');
    if (StringFile) {
        data = JSON.parse(StringFile);
        for (let i = 0; i < data.length; i++) {
            const p = document.createElement('p');
            p.innerText = `${data[i]}`;

            const update = document.createElement('button');
            const del = document.createElement('button');

            update.className = 'btn btn-primary m-1 mt-0';
            del.className = 'btn btn-danger m-1 mt-0';
            
            update.innerHTML = 'Update';
            del.innerHTML = 'Delete';

            update.setAttribute('data-index', i);
            del.setAttribute('data-index', i);

            contentBro.appendChild(p);
            contentBro.appendChild(update);
            contentBro.appendChild(del);

            // Add event listener for the update button
            update.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                const p = document.querySelector('.data').querySelectorAll('p')[index];

                if (!p.querySelector('input')) {
                    const inp = document.createElement('input');
                    inp.setAttribute('type', 'text');
                    inp.value = data[index];
                    p.appendChild(inp);

                    const confirm = document.createElement('button');
                    confirm.className = 'btn btn-primary change';
                    confirm.innerHTML = 'Changed';
                    p.appendChild(confirm);

                    confirm.addEventListener('click', function () {
                        data[index] = inp.value;
                        const jsonFile = JSON.stringify(data);
                        localStorage.setItem('Data', jsonFile);
                        p.innerText = inp.value; // Update the paragraph text with the new value
                    });
                }
            });

            // Add event listener for the delete button
            del.addEventListener('click', function () {
                const index = this.getAttribute('data-index');
                data.splice(index, 1); // Remove the item from the array
                localStorage.setItem('Data', JSON.stringify(data)); // Update the localStorage
                p.remove();
                update.remove();
                del.remove();
            });
        }
    } else {
        alert('Error: No data found in localStorage');
    }
});