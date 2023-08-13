// const showDetails = document.querySelector('.Details')
document.getElementById('DeleteRecord').addEventListener('click', function(e){

    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    let data = []   

    const Stringcont = localStorage.getItem(`user`)
    data = JSON.parse(Stringcont)

    let EmailCheck = false
    for (let i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
            // localStorage.removeItem(data[i])
            data.splice(i, 1);
            // Update the data in localStorage
            localStorage.setItem('user', JSON.stringify(data));
            alert('Record Deleted....')
            break
        }
        else{
            EmailCheck = true
        }
    }

    if (EmailCheck) {
        alert('Email and Password is no matched....')
    }
})