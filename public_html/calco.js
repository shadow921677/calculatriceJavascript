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
	try{
		var resultat = eval(valEcran);
		ecran.setAttribute('value', resultat);
	}
	catch(e){
		ecran.setAttribute('value', 'erreur');
	}
}, true);

document.addEventListener('keydown', function(e){
	if(e.keyCode=='8'){
		ecran.setAttribute('value', '');
	}
	if(e.keyCode=='96'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '0';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='97'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '1';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='98'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '2';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='99'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '3';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='100'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '4';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='101'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '5';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='102'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '6';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='103'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '7';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='104'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '8';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='105'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '9';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='107'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '+';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='109'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '-';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='110'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '.';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='111'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '/';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='106'){
	var valEcran = ecran.getAttribute('value');
	valEcran = valEcran + '*';
	ecran.setAttribute('value', valEcran);
	}
	if(e.keyCode=='13'){
	var valEcran = ecran.getAttribute('value');
	try{
		var resultat = eval(valEcran);
		ecran.setAttribute('value', resultat);
	}
	catch(e){
		ecran.setAttribute('value', 'erreur');
	}
	}
}, true);

