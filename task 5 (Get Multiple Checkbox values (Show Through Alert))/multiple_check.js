const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')

function checkBox()
{
    if (check1.checked && check2.checked)
    {
        alert('Please Click only onces......😭💁‍♂️')
    }
    else if (check1.checked)
    {
        alert('First checkBox Click......😍')
    }
    else if (check2.checked) {
        alert('Second checkBox Click......😍')
    }
    else{
        alert("At least Check one BOX.....😭💁‍♂️")
    }
}
    // check1.addEventListener('click', function(){
    //     
    // })
    // check2.addEventListener('click', function(){
    //     alert('Second checkBox Click......')
    // })