'use strict';
//Display menu
var show = document.querySelector('.menu-trigger');
var body = document.querySelector('body');
var hideMenu = document.querySelector('.menu-close');
var links = document.querySelectorAll('.menu-links');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', closeMenu);
}
function openMenu(){
	body.classList.add('show');
}
show.addEventListener('click', openMenu);

//Hide Menu
function closeMenu(){
	body.classList.remove('show');
}
hideMenu.addEventListener('click', closeMenu);

//Request more reasons with promises
function requestFetch(){
fetch('https://three-random-reasons-izwfjpgbqm.now.sh')
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var reasons = json.reasons;
    var listHTML = '';
		var divAjax = document.querySelector('.divReasons');
    for (var i = 0; i < reasons.length; i++) {
      listHTML += '<div class="reason' + parseInt(i+1)+'"><h4 class="reasons-title">' + reasons[i].title + '</h4><p>' + reasons [i].description + '</p></div>';
			// divAjax.appendChild(listHTML);
    }
    divAjax.innerHTML += listHTML;
  });
}
var buttonRequest = document.querySelector('.reasonsBtn');
buttonRequest.addEventListener('click', requestFetch);
