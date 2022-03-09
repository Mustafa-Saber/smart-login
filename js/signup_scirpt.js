
'use strict'
//                  all inputs 
const signUpName = document.getElementById('signupName');
const signUpEmail = document.getElementById('signupEmail');
const signUpPassword = document.getElementById('signupPassowrd');
//           all btn + message alert
const message = document.getElementById('message')
const signUpBtn = document.getElementById('signUp');
const linkIn = document.getElementById('link-in');
let containerUser = []


// if condition (... = null )not is add  or else add  Array List
localStorage.getItem('accounts') == null ? containerUser = [] : containerUser = JSON.parse(localStorage.getItem('accounts'))

// ignUp save data + push array
function signUp()
{
    let dataSignUp = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value,
    }
    containerUser.push(dataSignUp);
    localStorage.setItem('accounts', JSON.stringify(containerUser));
    clearForm();
}
// clear inp form 
function clearForm()
{
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}

// Check for e - mail on the system  for loop array

function checkForEmail()
{
    for (let n in containerUser)
    {
        if (containerUser[n].email.toLowerCase() == signUpEmail.value.toLowerCase())
            return false;
    }
}
// Check for e - mail on the system  for loop array
function checkForEmail()
{
    for (let n in containerUser)
    {
        if (containerUser[n].email.toLowerCase() == signUpEmail.value.toLowerCase())
            return false;
    }
}

//for check inputs is empty or not
function checkInputEmpty()
{
    //    return regxe true or false 
    let regx = function ()
    {
        let regxe = / ^\S/
        if (regxe.test(signUpName.value) || regxe.test(signUpEmail.value) || regxe.test(signUpPassword.value))
        {
            return true
        } else
        {
            return false
        }
    }

    if ((signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") && regx() == false)
    {
        message.innerHTML = `<span class="text-danger m-3 fa-2x fw-bold">All inputs is required</span>`
        return false


    } else if (checkForEmail() == false)
    {
        message.innerHTML = ` <span class="text-danger m-3 m-3  fw-bold">email already exists</span>`
    }
    else
    {
        message.innerHTML = `<span span class="text-success m-3 m-3 fa-2x fw-bold" > Success</span > `
        signUp()
    }

}

signUpBtn.addEventListener('click', checkInputEmpty);

// arrow function  href tab page  
let href = () => window.location.href = ('login.html')
linkIn.addEventListener('click', href);