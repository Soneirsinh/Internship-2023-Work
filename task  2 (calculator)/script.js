const inp = document.getElementById('inp')
const but = document.querySelectorAll('button')
let arr = Array.from(but)


let string = ''
arr.forEach((btn) => {
    btn.addEventListener('click', function () {
        if (string === '' && (btn.innerHTML === '+' || btn.innerHTML === '-' || btn.innerHTML === '*' || btn.innerHTML === '/')) {
            alert('Incorrect startin')
        }
        else if (btn.innerHTML == 'C') {
            inp.value = '';
            string = ''
        }
        else if (btn.innerHTML == '=') {
            if(string.endsWith('+') || string.endsWith('-') || string.endsWith('*') || string.endsWith('/')){
                alert('Inproper Ending please endwith number...')
            }
            else{
                let result = eval(string);
                inp.value = result
                setTimeout(() => {
                    inp.value = ''
                }, 2000);
            }
        }
        else if (((string.charAt(string.length - 1) == '+') && (btn.innerHTML == '+' || btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-')) || ((string.charAt(string.length - 1) == '-') && (btn.innerHTML == '+' || btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-')) || ((string.charAt(string.length - 1) == '*') && (btn.innerHTML == '+' || btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-')) || ((string.charAt(string.length - 1) == '/') && (btn.innerHTML == '+' || btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-'))) {
            string = string.slice(0, -1); // Remove the last operator
            string = string.concat(btn.innerHTML); // Add the new operator
            inp.value = string; // Update the input value
        }
        else if (btn.innerHTML == '+' || btn.innerHTML == '/' || btn.innerHTML == '*' || btn.innerHTML == '-') {
            string = string.concat(btn.innerHTML)
            inp.value += btn.innerHTML
        }
        else {
            string = string.concat(btn.innerHTML)
            inp.value += btn.innerHTML

        }
    })
})