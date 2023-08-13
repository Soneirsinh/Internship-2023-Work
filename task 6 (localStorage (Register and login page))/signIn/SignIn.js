function Submit(e) {
    event.preventDefault()

    const Inputemail = document.getElementById('email').value
    const Inputpassword = document.getElementById('password').value
    const Text = document.querySelector('.Text')


    let data = []
    const stringData = localStorage.getItem('user')
    data = JSON.parse(stringData)

    let DataCheck = true
    for (let i = 0; i < data.length; i++) {
        if (data[i] == Inputemail) {
            if (data[i+1] == Inputpassword) {
                Text.innerHTML = "You are SuccesFully LogIn......."
                // document.write('You are SuccesFully LogIn.......')
                break;
            }
            else {
                DataCheck = false
            }
        }
    }

    if (!DataCheck) {
        Text.innerHTML = "You are Not LogIn......."
        // document.write('You are Not LogIn.......')
    }
    // if (Inputemail === mail && Inputpassword === pass) {
    //     document.write('You are successfully login<br>')
    //     document.write('Here your Detail<br>')
    //     document.write(`Email :- ${mail}<br>`)
    //     document.write(`Password :- ${pass}<br>`)

    // } else if (Inputemail != mail) {
    //     document.write('Email is wrong')
    // } else if (Inputpassword != pass) {
    //     document.write('Password is wrong')
    // }
}