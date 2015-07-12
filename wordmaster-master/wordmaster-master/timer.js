function startTimer()
{
    respond(5, "");
    valueSec = 100;
    ts = setInterval("refs();", 1000);  
}

function refs()
{
	if (valueSec > 9) {
		document.getElementById('seconds').innerHTML = valueSec + " seconds left..";
	} else {
		document.getElementById('seconds').innerHTML = "0" + valueSec + " seconds left..";
	}
        
        if (valueSec != 0) {
		valueSec--;
	} else {
            clearInterval(ts);
            over();
        }
}

function over() {
    clearInterval(ts);
    alert('Time up! Your final score is ' + point + ".");
    newGame();
}