document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
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
    console.log(Array.isArray(data));

    let EmailCheck = false
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email) {
            EmailCheck = true
            break
        }
    }
    if (EmailCheck) {
        alert('exist');
    }
    else {
        userData = {
            'email': email,
            'password': password,
            'contact': contact,
            'address': address,
            'course': course,
            'image': image,
            'gender': gender,
            'hobbies': hobbies
        }
        data.push(userData)
        const json = JSON.stringify(data);
        // Store the updated JSON string in local storage under the key 'email'
        localStorage.setItem("user", json);
        alert('Data succssfully submit !!.. ')
    }
})
