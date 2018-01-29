let wrapperDropdown = document.querySelectorAll('.wrapper-dropdown');

for (let i = 0; i<wrapperDropdown.length; i++){
    wrapperDropdown[i].onclick = wrapperDropdownActive;
}

function wrapperDropdownActive() {
    this.classList.toggle('active');
}



//Exchange-popup
let exchangeBtn = document.querySelector('.exchange-btn');
let exchangePopup = document.querySelector('.exchange-popup');

exchangeBtn.addEventListener('click', ()=>{
    exchangePopup.classList.add('active');
});

//Cancel Exchange request
let del = document.querySelectorAll('.del');
let cancelExchangePopup = document.querySelector('.cancel-exchange-popup');
for (let i=0; i<del.length; i++){
    del[i].addEventListener('click', ()=>{
        cancelExchangePopup.classList.add('active');
    })
}

//Confirm exchange changes
let confirmChange = document.querySelectorAll('.ok');
let confirmChangePopup = document.querySelector('.confirm-change-popup');
for (let i = 0; i<confirmChange.length; i++){
    confirmChange[i].addEventListener('click', ()=>{
        confirmChangePopup.classList.add('active');
    })
}

let close = document.querySelectorAll('.close');
for (let i=0; i<close.length; i++){
    close[i].addEventListener('click', ()=>{
        exchangePopup.classList.remove('active');
        cancelExchangePopup.classList.remove('active');
        confirmChangePopup.classList.remove('active');
    });
}

// Open deposit dropdowns

let depositButton = document.querySelectorAll('.deposit');
let withdrawButton = document.querySelectorAll('.withdraw');

let withdrawBlock = document.querySelectorAll('.assets-item_withdraw-info');
let depositBlock = document.querySelectorAll('.assets-item_deposit-info');

for ( let i=0; i<depositButton.length; i++){
    depositButton[i].addEventListener('click', () =>{
        for (let i =0; i<depositButton.length; i++){
            depositBlock[i].classList.add('active')
        }
    });
}

for (let i=0; i<withdrawButton.length; i++){
    withdrawButton[i].addEventListener('click', () =>{
        for(let i = 0; i<withdrawBlock.length; i++){
            withdrawBlock[i].classList.add('active');
        }
    })
}

// Close deposit and withdraw dropdowns
let cancelButton = document.querySelectorAll('.cancel');
for (let i=0; i<cancelButton.length; i++){
    cancelButton[i].addEventListener('click', ()=>{
        depositBlock[i].classList.remove('active');
        withdrawBlock[i].classList.remove('active')
    })
}



