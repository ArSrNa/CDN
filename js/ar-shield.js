function shield(){
	player.play();
	document.getElementById("cont-lw").style.zIndex = 10;
    var s = document.getElementById("zz-black");
    s.style.display = "block";
    var l = document.getElementById("log_window");
    l.style.display = "block";
}

function cancel_shield(){
	player.pause();
	document.getElementById("cont-lw").style.zIndex = 0;
    var s = document.getElementById("zz-black");
    s.style.display = "none";
    var l = document.getElementById("log_window");
    l.style.display = "none";
}