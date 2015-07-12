window.onload = initial;

NUMBER = 12;

prob = [8.5, 10.4, 14.9, 18.3, 29.5, 31.3, 33.8, 36.8, 44.3, 44.5, 45.6, 51.1, 54.1, 60.8, 68, 71.2, 71.4, 79, 84.8, 91.8, 95.1, 96.6, 97.9, 98.2, 99, 100];
letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
allowed = new Array();
backup = new Array();
done = new Array();
donei = 0;
addto = 1;
point = 0;

function initial() {
    start = document.getElementById('start');
    start.addEventListener('click', populate, false);
    start.addEventListener('click', startTimer, false);
    
    change = document.getElementById('change');
    change.addEventListener('click', changeit, false);
    
    end = document.getElementById('end');
    end.addEventListener('click', over, false);

    list = document.getElementById('list');

    input = document.getElementById('input');
    input.addEventListener('keyup', checker, false);
    input.setAttribute("class", "hide");
    
    words = document.getElementById('words');
    
    clear = document.getElementById('clear');
    clear.addEventListener("click", clearCon, false);
    
    myConsole = document.getElementById('console');
}

function clearCon() {
    myConsole.innerHTML = "<div id='response'></div>";
}

function newGame() {
    addto = 1;
    point = 0;
    clear.setAttribute("class", "btn btn-danger");
    start.setAttribute("class", "btn btn-warning");
    end.setAttribute("class", "hide");
    change.setAttribute("class", "hide");
    input.setAttribute("class", "hide");
    input.disabled = true;
    words.setAttribute("class", "hide");
    respond(6, "");
}

function populate() {
    var lett = "";
    var rand;
    start.setAttribute("class", "hide");
    words = document.getElementById('words');
    words.innerHTML = "";
    for (i = 0; i < NUMBER; i++) {
        var nspan = document.createElement("span");
        rand = randomWord();
        nspan.appendChild(document.createTextNode(rand));
        allowed[i] = rand.charCodeAt(0);
        lett += rand;
        words.appendChild(nspan);
    }
    backup = allowed.slice(0);
    clear.setAttribute("class", "btn btn-danger hide");
    words.setAttribute("class", "string");
    input.setAttribute("class", "form-control");
    end.setAttribute("class", "btn btn-danger");
    change.setAttribute("class", "btn btn-primary");
    input.value = '';
    input.disabled = false;
    input.focus();
    
    document.getElementById("points").innerHTML = "Points : " + point;
    document.getElementById("points").setAttribute("class", "");
    
    document.getElementById('instruct').setAttribute("class", "hide");
}

function changeit() {
    populate();
    points("");
}

function randomWord() {
    var num = Math.random() * 100;
    //return String.fromCharCode(num);
    return letters[findPos(num)];
}

function findPos(num) {
    var i = 0;
    while (num > prob[i]) {
        i++;
    }
    return i;
}


function check() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'check.php?input=' + (input.value), true);
    xmlhttp.onreadystatechange = now;
    xmlhttp.send();
}

function now() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        if (xmlhttp.responseText == 0) {
            respond(2, input.value);
        } else {
            respond(1, input.value);
            points(input.value);
        }
        backitallup();
    }
}

function doneup(word) {
    if (done.indexOf(word) == -1) {
        done[donei++] = word;
        return true;
    }
    return false;
}

function points(word) {
    switch (word.length) {
        case 10 :
            point += 200;
        case 9 :
            point += 100;
        case 8 :
            point += 75;
        case 7 :
            point += 50;
        case 6 :
            point += 25;
        case 5 :
            point += 15;
        case 4 :
            point += 10;
        case 3 :
            point += 5;
            break;
        default :
            if (point >= 15) {
                point -= 15;
            } else if (point >= 120) {
                point -= 20;
            }
    }
    document.getElementById("points").innerHTML = "Points : " + point;
}

function backitallup() {
    input.value = '';
    allowed = backup.slice(0);
}

function checker(e) {
    var key = e.which;
    var value = input.value;
    switch (key) {
        case 13 :
            if (value.length > 2) {
                if (doneup(value)) {
                    check();
                } else {
                    respond(3, value);
                    input.value = '';
                    backitallup();
                }
            } else {
                respond(4, value);
                input.value = '';
                backitallup();
            }
            break;
        case 37:
        case 38:
        case 39:
        case 40:
        case 8 :
            input.value = '';
            backitallup();
            break;
        case 48:
        case 96:
            changeit();
            break;
        default :
            if (allowed.indexOf(key) == -1) {
                input.value = value.substring(0, (value.length - 1));
            } else {
                allowed.splice(allowed.indexOf(key), 1)[0];
            }
    }
    //document.getElementById('response').innerHTML += allowed.toString() + " || " + "<br />";   //spliced.toString()
}

function respond(i, word) {
    newd = document.createElement("div");
    switch (i) {
        case 1:
            //txt = document.createTextNode((addto++) + ". " + word);
            txt = document.createTextNode(">> " + word);
            newd.setAttribute("class", "right");
            break;
        case 2: //wrong
            txt = document.createTextNode("Bad word or request : " + word);
            newd.setAttribute("class", "error");
            break;
        case 3: //already
            txt = document.createTextNode("RepeatedStringError : " + word);
            newd.setAttribute("class", "error");
            break;
        case 4: //small
            txt = document.createTextNode("Unknown length : " + word);
            newd.setAttribute("class", "error");
            break;
        case 5: //start
            addnewline();
            txt = document.createTextNode("New session started");
            newd.setAttribute("class", "refresh");
            break;
        case 6:
            txt = document.createTextNode("Session ended");
            newd.setAttribute("class", "refresh");
            break;
        case 7:
            addnewline();
            return ;
    }
    newd.appendChild(txt);
    myConsole.insertBefore(newd, myConsole.firstChild);
    //addnewline();
}

function addnewline() {
    myConsole.insertBefore(document.createElement("br"), myConsole.firstChild);
}
