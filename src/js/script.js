let confirmbtn = document.getElementById('confirm');
let formcontainer = document.querySelector('.form-container');
let popups = document.querySelector('.popup');
let btss = document.querySelector('.bts')

confirmbtn.addEventListener('click', (e) => {
    e.preventDefault();
    // alert("hello");
    formcontainer.style.display = "none";
    btss.style.display = "none";
    popups.style.display = "block";


});


// toggle
var boxes = document.querySelector(".toggle-button");
var circle = document.querySelector("button-container");
var tenure = document.querySelector('.tenure')
boxes.addEventListener('click', function () {
    circle.classList.toggle("circles");
    hero

})


// validaton form 
function validateForm(event) {

    event.preventDefault();
    let phonePattern = /^\d{10}$/;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneInput = document.getElementById('number').value;
    var errorText = document.getElementById('errorText');
    var errorEmail = document.getElementById('errorEmail');
    var errorNumber = document.getElementById('errorNumber')


    if (name === '' || email === '' || number === '') {
        errorText.textContent = 'This fields are required';
        errorEmail.textContent = 'This fields are required';
        errorNumber.textContent = 'This fields are required';
        return false;
    }


    // Clear any previous error messages
    errorText.textContent = '';
}
