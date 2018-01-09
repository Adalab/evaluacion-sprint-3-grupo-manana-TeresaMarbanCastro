'use strict';
//Display menu
var show = document.querySelector('.menu-trigger');
var showList = document.querySelector('.showCompleteMenu');
var hideMenu = document.querySelector('.menu-close');

function openMenu(){
	showList.classList.add('show');
	hideMenu.classList.add('closingMenu');
}
show.addEventListener('click', openMenu);

//Hide Menu

function closeMenu(){
	showList.classList.remove('show');
	hideMenu.classList.remove('closingMenu');
}
hideMenu.addEventListener('click', closeMenu);
