function Submit(e) 
{
    event.preventDefault()
    // console.log("not refersend....")
    debugger
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let data =[]

    // Retrieve the array from local storage for the given email
    const stringMail = localStorage.getItem('user');
    data = JSON.parse(stringMail) || [];

    let EmailChek = false
    
    for (let i = 0; i < data.length; i++) 
    {
        if (data[i] === email) 
        {
            EmailChek = true
        }
    }
    if (EmailChek) 
    {
        alert('exist');
    }
    else 
    {
        data.push(username);
        data.push(email);
        data.push(password);
        //  Convert the updated mail array to a JSON string
        const json = JSON.stringify(data);
        // Store the updated JSON string in local storage under the key 'email'
        localStorage.setItem("user", json);
        window.location.href = '/signIn/localStorage_signIn.html';
    }
}