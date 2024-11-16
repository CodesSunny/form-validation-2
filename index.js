
// Select each input field and dropdown
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const passwordInput = document.getElementById('Password');
const cpwInput = document.getElementById('cPassword');

// Select each error span for displaying validation messages
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const mobileError = document.getElementById('mobileError');
const pwError = document.getElementById('pwError');
const cpwError = document.getElementById('cpwError');

// set initial values
let isValid = true;

function validateForm(e){
    e.preventDefault();
    // validate name
    if(nameInput.value.trim() === ""){
        nameError.textContent="Pls enter ur name";
        nameInput.style.border='1px solid red';
        isValid =false;
    }else{
        nameError.textContent="";
        nameInput.style.border='1px solid green';
        isValid =true;
    }
    // validate email
    if(emailInput.value.trim() === ""){
        emailError.textContent="Pls enter ur email";
        emailInput.style.border='1px solid red';
        isValid =false;
    }else{
        emailError.textContent="";
        emailInput.style.border='1px solid green';
        isValid =true;
    }
    // validate mobile
    if(mobileInput.value.trim() === ""){
        mobileError.textContent="Pls enter mobile no";
        mobileInput.style.border='1px solid red';
        isValid =false;
    }else{
        mobileError.textContent="";
        mobileInput.style.border='1px solid green';
        isValid =true;
    }
    // validate pw
    if(passwordInput.value.trim() === ""){
        pwError.textContent="Pls enter password";
        passwordInput.style.border='1px solid red';
        isValid =false;
    }else{
        pwError.textContent="";
        passwordInput.style.border='1px solid green';
        isValid =true;
    }
    // validate confirm pw
    if(cpwInput.value.trim() === "" || cpwInput.value.trim() !== passwordInput.value.trim()){
        cpwError.textContent="Pls enter same password";
        cpwInput.style.border='1px solid red';
        isValid =false;
    }else{
        cpwError.textContent="";
        cpwInput.style.border='1px solid green';
        isValid =true;
    }
    // submit when all validations passed
    if(isValid){
        alert("form submitted");
    }
}
