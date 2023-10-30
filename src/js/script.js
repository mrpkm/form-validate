
let confirmbtn = document.getElementById('confirm');
let formcontainer = document.querySelector('.form-container');
let popups = document.querySelector('.popup');
let btss = document.querySelector('.bts')

confirmbtn.addEventListener('click', (e) => {
    e.preventDefault();
    formcontainer.style.display = "none";
    btss.style.display = "none";
    popups.style.display = "block";
});



