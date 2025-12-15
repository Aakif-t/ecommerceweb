


// const form =document.querySelector('#form')


// const username =document.querySelector('#username')
// const email =document.querySelector('#email')
// const  password =document.querySelector('#password')
// const confirmpassword =document.querySelector('#confirm_password')


// form.addEventListener('submit',(e)=>{  
//     e.preventDefault();
//    if(! validateInputs());
//    e.preventDefault();
// })

// function validateInputs (){
//   //  const usernameval = username.value.trim();
// const usernameval = username.value.trim();
//     const emailval = email.value.trim();
//     const passwordval = password.value.trim();
//    // const confirmpassword =confirmpassword.value.trim();
//    const confirmPasswordVal = confirmpassword.value.trim();
//     let success = true

//     if(usernameval===''){
//         success=false;
//         setError(username,'username is reuuired')
//     }
//    else 
//     setsuccess(username)

//    if (emailval===''){
//     success=false;
//     setError(email,'email is reruired')
//    }

// else{ if (!validateEmail(emailval))
//     setError(email,'please enter a valid email')
// }

// if (passwordval===''){
//     success=false;
//     setError(password,'password is required')
// }

// else if (passwordval.length<8){
//     setError(password,'password must be atlest 8 characters long')
// }
// else{
//     setsuccess(password)
// }

//  if ( confirmpassword ===''){
//     setError(confirmpassword,'confirm password is require')
//  }
// else if (confirmpasswordval!==passwordval){
//     setError(confirmpassword,'password dose not match')
// }

// else{
//     setsuccess(confirmpassword)
// }

// }

// function setError (element,message){
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector('.error')



// errorElement.innertext=message;
// inputgroup.classList.add('error')
// inputgroup.classList.remove('success')

// }


// function setsuccess (element){
//     const inputgroup = element.parentElement;
//     const errorElement = inputgroup.querySelector('.error')



// errorElement.innertext='';
// inputgroup.classList.add('success')
// inputgroup.classList.remove('error')
// }

// const validateEmail =(email)=>{
//     return string (email)
//     .tolewer()
//     .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/


//     );
// return success;
// }



// Select form and input fields
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirm_password'); // ✅ matches HTML ID

form.addEventListener('submit', (e) => {
    console.log("Form is submitted ")
    e.preventDefault(); // Prevent form from submitting
    const isValid = validateInputs();
    if (isValid) {
        console.log("Form is valid. You can now submit or redirect.",validateInputs());
        // You can proceed with form submission or redirect here
    }
});

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmpassword.value.trim();
    let success = true;

    // Username validation
    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    // Email validation
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }





    
    // Password validation
    const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirm_password');
const togglePassword = document.querySelector('#togglePassword');
const toggleConfirm = document.querySelector('#toggleConfirm');
const strengthBar = document.querySelector('#strengthBar');

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

// Show / Hide Password
togglePassword.addEventListener('click', () => {
    password.type = password.type === "password" ? "text" : "password";
    togglePassword.classList.toggle("fa-eye-slash");
});

toggleConfirm.addEventListener('click', () => {
    confirmpassword.type = confirmpassword.type === "password" ? "text" : "password";
    toggleConfirm.classList.toggle("fa-eye-slash");
});

// Password Strength Meter
password.addEventListener('input', () => {
    const val = password.value;
    let strength = 0;

    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/\d/.test(val)) strength++;
    if (/[!@#$%^&*]/.test(val)) strength++;

    if (strength === 0) {
        strengthBar.style.width = "0";
        strengthBar.style.background = "#ddd";
    } else if (strength === 1) {
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
    } else if (strength === 2) {
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
    } else if (strength === 3) {
        strengthBar.style.width = "75%";
        strengthBar.style.background = "yellowgreen";
    } else if (strength === 4) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
});

// Your Validation Code
function validatePassword() {
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmpassword.value.trim();
    let success = true;

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required');
    } else if (!passwordRegex.test(passwordVal)) {
        success = false;
        setError(password, 'Password must be 8+ chars, include uppercase, number & special character');
    } else {
        setSuccess(password);
    }

    if (confirmPasswordVal === '') {
        success = false;
        setError(confirmpassword, 'Confirm password is required');
    } else if (confirmPasswordVal !== passwordVal) {
        success = false;
        setError(confirmpassword, 'Passwords do not match');
    } else {
        setSuccess(confirmpassword);
    }

    return success;
}




// Show error message
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

// Show success state
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

// Validate email format
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}
// Load saved table data on page load
document.addEventListener("DOMContentLoaded", function () {
    loadTableFromSession();
});

function addtable() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirm_password = document.getElementById("confirm_password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let flexRadioDefault = document.querySelector('input[name="flexRadioDefault"]:checked')?.value || "";
    let dob = document.getElementById("dob").value.trim();
    let location = document.getElementById("location").value.trim();

    console.log("test",username,email,password,confirm_password,phone,flexRadioDefault,dob,location);

    if (
        username === "" || 
        email === "" ||
        flexRadioDefault === "" ||
        password === "" ||
        confirm_password === "" ||
        location === "" ||
        phone === "" ||
        dob === ""
    ) {
        //alert("Please fill all required fields!");
        return;
    }

    let newRow = `
        <tr>
            <td>${username}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${confirm_password}</td>
            <td>${phone}</td>
            <td>${flexRadioDefault}</td>
            <td>${dob}</td>
            <td>${location}</td>
        </tr>
    `;

    document.getElementById("previewBody").innerHTML = newRow;
    document.getElementById("example").style.display = "table";

    return false;
}

    // Prepare user object
    let userData = {
        username,
        email,
        password,
        confirm_password,
        phone,
                gender: flexRadioDefault,

        dob,
        location
    };

    // Get old data from session or empty array
    let users = JSON.parse(sessionStorage.getItem("users")) || [];

    // Push new record
    users.push(userData);

    // Save back to session
    sessionStorage.setItem("users", JSON.stringify(users));

    // Reload table
    loadTableFromSession();

    alert("Data saved successfully!");


function loadTableFromSession() {
    let users = JSON.parse(sessionStorage.getItem("users")) || [];
    let tableBody = "";

    users.forEach(user => {
        tableBody += `
        <tr>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.confirm_password}</td>
            <td>${user.phone}</td>
            <td>${user.gender}</td>
            <td>${user.dob}</td>
            <td>${user.location}</td>
        </tr>`;
    });

    document.querySelector("#example tbody").innerHTML = tableBody;
}


new DataTable('#example');





