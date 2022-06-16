// blur event for all input fields in form
const inputFields = document.querySelectorAll('#signUpForm input');

inputFields.forEach((element) => {
    element.addEventListener('blur', function() {
        //if input field passes validation remove the error class, else add it
            if(this.checkValidity()) {
            element.classList.remove('error-input');
            }
            else {
                element.classList.add('error-input');
            }
        }
    )
});

// confirm password validation
const passwordCheck = () => {
    const password1 = document.getElementById('password').value;
    const password2 = document.getElementById('confirmPassword').value;
    if (password1 == '') {
        console.log(password1)
    }
    

}


const createAccountBtn = document.querySelector('.createAccountBtn');
createAccountBtn.addEventListener('click', passwordCheck());




