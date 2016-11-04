/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true */
var hamburger, menu, addBtn, icon;
addBtn = document.querySelector('.addStory');
icon = document.querySelector('button i');
//hamburger
hamburger = document.querySelector('.hamburger');
menu = document.querySelector('.menu');

function toggleMenu() {
    hamburger.classList.toggle('active_menu');
    menu.classList.toggle('hidden_menu');

}
//+ button
function removeSmaller(){
    addBtn.classList.remove('smaller');
}
function addSmaller(){
    addBtn.classList.add('smaller');
    setTimeout(removeSmaller, 200);
}
function changeIcon(){
    console.log(icon.innerHTML);
    if(icon.innerHTML == 'bookmark_border'){
        icon.innerHTML = 'bookmark';
    }
    else if(icon.innerHTML == 'bookmark'){
        icon.innerHTML = 'bookmark_border';
    }
}

hamburger.addEventListener('click', toggleMenu);
addBtn.addEventListener('click', changeIcon);
addBtn.addEventListener('click', addSmaller);
