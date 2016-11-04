/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */

var i, hamburger, menu, tabs, contents, line, mArticles, buttons, passwords, email, submitBtn, errorMessage, errorMessage2;
var errorMessages = [];
//hamburger
hamburger = document.querySelector('.hamburger');
menu = document.querySelector('.menu');
// tab bar
tabs = document.querySelectorAll('main li');
contents = document.querySelectorAll('main section');
line = document.querySelector('.line');

//main articles
mArticles = document.querySelectorAll('main article');

//buttons
buttons = document.querySelectorAll('.button');

//passwords
passwords = document.querySelectorAll('input[type=password]');
submitBtn = document.querySelector('fieldset input[type=submit]');
//email
email = document.querySelector('input[type=email]');
//errorMessages
errorMessage = document.getElementById('error');
errorMessage2 = document.getElementById('error2');

//test console
console.log('test');
//hamburger
function toggleMenu() {
    hamburger.classList.toggle('active_menu');
    menu.classList.toggle('hidden_menu');

}
// tab bar
function showContent(){
  if(tabs[0].classList.contains('active')){
    contents[0].classList.remove('hidden');
    contents[1].classList.add('hidden');
    line.classList.remove('tab2');
    line.classList.add('tab1');
  }
  if(tabs[1].classList.contains('active')){
    contents[1].classList.remove('hidden');
    contents[0].classList.add('hidden');
    line.classList.add('tab2');
  }
}
function selectTab(){
  for(i = 0; i < tabs.length; i++){
  tabs[i].classList.remove('active');
}
  this.classList.add('active');
  showContent();
}
//main articles
function removeSmaller(){
    for(i = 0; i < mArticles.length; i++){
        console.log(i);
        if(mArticles[i].classList.contains('smaller')){
            mArticles[i].classList.remove('smaller');
        }
    }
}
function addSmaller(){
  this.classList.add('smaller');
  setTimeout(removeSmaller, 200);
}
//buttons
function buttonChange(){
    this.classList.add('buttonChange');
}

//passwords
function checkEqual(){
    console.log(passwords[0].value.length);
    if(passwords[0].value == passwords[1].value){
        for(i = 0; i < 2; i++){
            passwords[i].setCustomValidity("");
            errorMessage2.classList.add('hidden');
        }
    }
    else{
        for(i = 0; i < 2; i++){
            passwords[i].setCustomValidity("Invalid field.");
            errorMessage2.classList.remove('hidden');
            errorMessage2.innerHTML = 'Uw wachtwoorden komen niet overeen.';
        }
    }
}
function checkEmail() {
    if (email.value === '') {
        errorMessage.classList.remove('hidden');
        errorMessage.innerHTML = 'Voer alstublieft uw email in.';
    }
    else{
        errorMessage.classList.add('hidden');
    }
}

//Eventlisteners
hamburger.addEventListener('click', toggleMenu);

for(i = 0; i < tabs.length; i++){
  tabs[i].addEventListener('click', selectTab);
}
for(i = 0; i < mArticles.length; i++){
    mArticles[i].addEventListener('click', addSmaller);
}
for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', buttonChange);
}
submitBtn.addEventListener('click', checkEqual);
submitBtn.addEventListener('click', checkEmail);
