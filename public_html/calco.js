/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//initialisation des variables sur les différents boutons
var neuf = document.getElementById('neuf');
var huit = document.getElementById('huit');
var sept = document.getElementById('sept');
var six = document.getElementById('six');
var cinq = document.getElementById('cinq');
var quatre = document.getElementById('quatre');
var trois = document.getElementById('trois');
var deux = document.getElementById('deux');
var un = document.getElementById('un');
var zero = document.getElementById('zero');
var plus = document.getElementById('plus');
var diviser = document.getElementById('diviser');
var moins = document.getElementById('moins');
var multi = document.getElementById('multi');
var point = document.getElementById('point');
var egal = document.getElementById('egal');
var ecran = document.getElementById('ecran');
//définition des fonctions
un.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '1';
	ecran.setAttribute('value', valEcran);
}, true);

deux.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '2';
	ecran.setAttribute('value', valEcran);
}, true);

trois.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '3';
	ecran.setAttribute('value', valEcran);
}, true);

quatre.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '4';
	ecran.setAttribute('value', valEcran);
}, true);

cinq.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '5';
	ecran.setAttribute('value', valEcran);
}, true);

six.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '6';
	ecran.setAttribute('value', valEcran);
}, true);

sept.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '7';
	ecran.setAttribute('value', valEcran);
}, true);

huit.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '8';
	ecran.setAttribute('value', valEcran);
}, true);

neuf.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '9';
	ecran.setAttribute('value', valEcran);
}, true);

zero.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '0';
	ecran.setAttribute('value', valEcran);
}, true);

point.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '.';
	ecran.setAttribute('value', valEcran);
}, true);

plus.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '+';
	ecran.setAttribute('value', valEcran);
}, true);

moins.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '-';
	ecran.setAttribute('value', valEcran);
}, true);

multi.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '*';
	ecran.setAttribute('value', valEcran);
}, true);

diviser.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '/';
	ecran.setAttribute('value', valEcran);
}, true);

egal.addEventListener('click', function(e){
	e.preventDefault();
	var valEcran = ecran.getAttribute('value');
	var resultat = eval(valEcran);
	ecran.setAttribute('value', resultat);
}, true);
