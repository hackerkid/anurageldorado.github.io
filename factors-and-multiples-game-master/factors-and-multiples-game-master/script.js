window.onload = restart;

var first = true;
var last = true;
var player = 1; // player 1;
var clicked = [];
var available = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

turnDiv = document.getElementById('turn');
movesDiv = document.getElementById('moves');

function initialise() {
	var article = document.getElementsByTagName('article')[0];
	article.innerHTML = null;
	document.getElementsByTagName('body')[0].height = window.innerHeight;
	for (var i = 1; i <= 50; i++) {
		var createdDiv = document.createElement('div');
		createdDiv.setAttribute('id', i);
		createdDiv.setAttribute('class', 'clickable');
		createdDiv.addEventListener('click', numberClicked, false);
		createdDiv.innerHTML = i;
		article.appendChild(createdDiv);
	}
}

function notFactOrMul() {
	document.getElementById('notFact').style.opacity = 1;
	setTimeout(hideFactOrMul, 2000);
}

function hideFactOrMul(id) {
	document.getElementById("notFact").style.opacity = 0;
}

function numberClicked() {
	if (first && !(this.id % 2 == 0 && this.id <= 25)) {
			//alert("!(this.id % 2 == 0 && this.id <= 50)");
			alert('Even number below 25 to begin with!')
			return ;
	}
	if (!first) {
		if (!(last % this.id == 0 || this.id % last == 0)) {
			//alert("!(last % this.id == 0 || this.id % last == 0)");
			notFactOrMul();
			return ;
		}
	}
	// 
	first = false;
	last = this.id;
	clicked.push(this.id);
	this.style.opacity = 0.5;
	this.removeEventListener('click', numberClicked, false);
	this.addEventListener('click', unclickable, false);
	this.setAttribute('class', 'unclickable');

	var count = 0;
	movesDiv.innerHTML = "MOVES : ";
	console.log(this.id);
	for (i = 1; i <= 50; i++) {
		if (clicked.indexOf(i.toString()) != -1) {
			continue;
		}
		if (((this.id % i) == 0 || (i % this.id) == 0)) {
			count++;
			movesDiv.innerHTML += i + " ";
		}
	}
	//console.log("count : " + count);
	if (count == 0) {
		turnDiv.innerHTML = "";
		movesDiv.innerHTML += "0<br><br>Player " + player + " wins.";
		unattach();
		return;
	}
	movesDiv.innerHTML += "<br><br>" + count + " move(s) available.";

	if (player == 1) {
		player = 2;
	} else {
		player = 1;
	}
	turnDiv.innerHTML = "TURN : Player " + player + "<br />";

	available.splice(available.indexOf(this.id), 1)
}

function unattach() {
	for (var i = 1; i <= 100; i++) {
		document.getElementById(i).removeEventListener('click', 'numberClicked', false);
	}
}

function unclickable() {
	if (this.className == ('unclickable')) {
	 	//alert('unclickable');
	 	return ;
	}
}

function restart() {
	var available = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	var first = true;
	var last = null;
	var player = 1; // player 1;
	var clicked = [];
	initialise();
}