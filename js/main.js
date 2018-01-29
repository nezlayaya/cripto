//Dropdown

let wrapperDropdown = document.querySelectorAll('.wrapper-dropdown');

for (let i = 0; i<wrapperDropdown.length; i++){
   wrapperDropdown[i].onclick = wrapperDropdownActive;
}

function wrapperDropdownActive() {
    this.classList.toggle('active');
}

//Login popup
let close = document.querySelectorAll('.close');
let loginButton = document.querySelector('.login');
let loginPopup = document.querySelector('.login-popup');

loginButton.addEventListener('click', () =>{
   loginPopup.classList.add('active')
});

//Sign-up popup
let signUp = document.querySelector('.sign-up');
let signUpPopup = document.querySelector('.sign-up-popup');
signUp.addEventListener('click', () =>{
   signUpPopup.classList.add('active')
});

for (let i = 0; i<close.length; i++) {
    close[i].addEventListener('click', () => {
        loginPopup.classList.remove('active');
        signUpPopup.classList.remove('active');
        exchangePopup.classList.remove('active');
    });
}

//Exchange-popup
let exchangeBtn = document.querySelectorAll('.exchange-btn');
let exchangePopup = document.querySelector('.exchange-popup');

for (let i=0; i<exchangeBtn.length; i++){
    exchangeBtn[i].addEventListener('click', ()=>{
        exchangePopup.classList.add('active');
    })
}