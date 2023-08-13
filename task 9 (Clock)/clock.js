const time = document.getElementById('time')
setInterval(() => {
    let date = new Date()
    date = date.toLocaleTimeString()
    time.innerHTML = date
}, 1000)