function clock() {

    setInterval(() => {
        let date = new Date()
        let string = date.toLocaleTimeString()
        let PM = string.endsWith('PM');

        let hour = parseInt(document.getElementById('hours').value)
        const min = parseInt(document.getElementById('minutes').value)
        const sec = parseInt(document.getElementById('second').value)
        const AmPm = document.getElementById('AmPm').value

        // console.log(typeof hour);
        // console.log(typeof AmPm);


        let liveHour = date.getHours()
        let livemin = date.getMinutes()
        let livesec = date.getSeconds()

        console.log("User time ::" + hour, min, sec, AmPm);
        console.log("Live time ::" + liveHour, livemin, livesec, PM);



        // let date = new Date()


        // let string = date.toLocaleTimeString()
        // let PM = string.endsWith('PM')
        // let AM = string.endsWith('AM')

        if (AmPm === "PM" && hour != 12) {
            hour = hour + 12;
        }

        if (hour === liveHour && min === livemin && sec === livesec && AmPm === (PM ? 'PM' : 'AM')) {
            alert("Alaram buszz......")
        }
    }, 1000)
}