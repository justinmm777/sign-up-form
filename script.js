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
function passwordCheck(event) {
    event.preventDefault();
    const password1 = document.getElementById("password").value;
    const password2 = document.getElementById("confirmPassword").value;
    const error = document.querySelector(".error");
    if (password1 !== password2) {
        error.textContent = "*Passwords do not match";
    } else {
        form.submit;
        // clear all the form fields
        form.reset();
        error.textContent = "";
    }
    
}


const form = document.getElementById("signUpForm");
form.addEventListener('submit', passwordCheck);


