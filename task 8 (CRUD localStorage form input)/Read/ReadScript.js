// const showDetails = document.querySelector('.Details')
document.getElementById('showDetails').addEventListener('click', function(e){   

    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').valueok

    let data = []

    const Stringcont = localStorage.getItem(`user`)
    data = JSON.parse(Stringcont)

    let EmailCheck = true
    for (let i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
                const showdata = document.querySelector('.showData')
                showdata.innerHTML = `
                Email = ${data[i].email} <br>
                password = ${data[i].password}<br>
                Contact = ${data[i].contact}<br>
                Address = ${data[i].address}<br>
                Course = ${data[i].course}<br>
                Image = ${data[i].image}<br>
                Gender = ${data[i].gender}<br>
                Hobbies = ${data[i].hobbies.join(', ')}
                `
                displayImage(data[i].image);
        }
        else{
            EmailCheck = false
        }
    }

    if (EmailCheck) {
        alert('There is no data')
    }
})
function displayImage(imageData) {
    const imageElement = document.createElement('img');
    imageElement.src = imageData;
    imageElement.style.maxWidth = '300px';
    imageElement.style.maxHeight = '300px';

    const imagePreview = document.querySelector('.showData');
    imagePreview.innerHTML = ''; // Clear previous image if any
    imagePreview.appendChild(imageElement);
}