'use strict';
//Display menu
var show = document.querySelector('.menu-trigger');
var body = document.querySelector('body');
var hideMenu = document.querySelector('.menu-close');

function openMenu(){
	body.classList.add('show');
	// hideMenu.classList.add('closingMenu');
}
show.addEventListener('click', openMenu);

//Hide Menu

function closeMenu(){
	body.classList.remove('show');
	// hideMenu.classList.remove('closingMenu');
}
hideMenu.addEventListener('click', closeMenu);

//Request more reasons
var request = new XMLHttpRequest();
var buttonRequest = document.querySelector('.reasonsBtn');
// function moreReasons(){
	request.open('GET', 'https://three-random-reasons-izwfjpgbqm.now.sh/');
	request.addEventListener('load', addReasons);
	// request.send();
// }
function addReasons(){
	var response = request.responseText;
		var responseJSON = JSON.parse(response).reasons;
		var listReasons= '';
  for (var i = 0; i < responseJSON; i++) {
    listReasons += '<div>' + responseJSON[i] + '</div>';
  }
  var div = document.querySelector('.divReasons');
  div.innerHTML = listReasons;
}
console.log.addReasons();
request.send();

buttonRequest.addEventListener('click', newRequest);
function newRequest(){
	request = new XMLHttpRequest();
	// moreReasons();
}
// moreReasons();
