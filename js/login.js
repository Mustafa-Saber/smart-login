
//                                             for login

let signinEmail = document.getElementById('signinEmail');
const signinPassword = document.getElementById('signinPassowrd');
const message = document.getElementById('message')
const signinBtn = document.getElementById('signin');
const linkUp = document.getElementById('link-up');
let loginUser = []

// if locale storage null =message !

let mess = message.innerHTML = `<span class="text-danger m-3 fa-2x fw-bold">do you have an account?</span>`
localStorage.getItem('accounts') == null ? mess : loginUser = JSON.parse(localStorage.getItem('accounts'))


// check Login Empty  in ...
function checkLoginEmpty()
{
    let regxLogin = function ()
    {
        let regxe = /^\S/
        if (regxe.test(signinEmail.value) == true || regxe.test(signinPassword.value) == true)
        {

            return true;
        } else
        {
            return false
        }
    }

    if (signinPassword.value == "" || signinEmail.value == "" || regxLogin == false)
    {
        return true
    }

}
// for loop in array email & pass 
function checkForlogin()
{
    for (let n in loginUser)
    {
        if (checkLoginEmpty() == true)
        {
            message.innerHTML = `<span class="text-danger m-3 fa-2x fw-bold">All inputs is required</span>`
        }
        else if (signinEmail.value.toLowerCase() == loginUser[n].email.toLowerCase() && signinPassword.value.toLowerCase() == loginUser[n].password.toLowerCase())
        {
            console.log(11);
            localStorage.setItem('sessionlogin', loginUser[n].name)
            window.location.href = ('home.html')
        } else
        {
            message.innerHTML = `<span class="text-danger m-3 fa-2x fw-bold">incorrect email or password</span>`
        }
    }
}
signinBtn.addEventListener('click', checkForlogin)

// arrow function  href tab page  
let href = () => window.location.href = ('signup.html')

linkUp.addEventListener('click', href)