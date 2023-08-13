document.getElementById('update').addEventListener('click', function (e) {

    event.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    let data = []

    const Stringcont = localStorage.getItem(`user`)
    data = JSON.parse(Stringcont)

    let EmailCheck = true
    for (let i = 0; i < data.length; i++) 
    {
        if (data[i].email == email && data[i].password == password) {
            const contact = document.getElementById('contact').value
            const address = document.getElementById('address').value
            const course = document.getElementById('course').value
            const image = document.getElementById('image').value

            const genderRadios = document.querySelectorAll('input[name="gender"]');
            let gender = '';
            genderRadios.forEach(radio => {
                if (radio.checked) {
                    gender = radio.value;
                }
            });
        
           
            hobbieExit = true
            const hobbyCheckboxes = document.querySelectorAll('input[name="hobby"]');
            const hobbies = [];
            if (!hobbyCheckboxes[0].checked && !hobbyCheckboxes[1].checked && !hobbyCheckboxes[2].checked) {
                alert('Please checked the at least one hobbies')
                return
            }
            else {
                hobbyCheckboxes.forEach((value)=>{
                    hobbies.push(value)
                })
            }


            let data = []
            let stringcont = localStorage.getItem(`user`)
            data = JSON.parse(stringcont) || [];

            data[i].contact = contact
            data[i].address = address
            data[i].course = course
            data[i].image = image
            data[i].gender = gender
            data[i].hobbies = hobbies
            const json = JSON.stringify(data);
            localStorage.setItem("user", json);
            alert('Your details is succesfully submited.......')
        }
        else {
            EmailCheck = false
        }
    }
    if (!EmailCheck) {
        alert('Your Email either password is incorrext so please enter correct email and password if there is no account so create!')
    }
})