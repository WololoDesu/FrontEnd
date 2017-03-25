// Dynamic theme

function loadTheme(){
	var vainqueur = localStorage.getItem("vainqueur");
	if(vainqueur!=null){
		var banner1 = document.getElementById("bannerS1");
		var banner2 = document.getElementById("bannerS2");
		var banner3 = document.getElementById("bannerS3");
		switch(vainqueur){
			case '1' :
				document.getElementById("customTheme").href = "assets/css/hippotheme.css";
				banner1.src = "images/pandawinner-banner.png";
				banner2.src = "images/foxbasic-banner.png";
				banner3.src = "images/tigerbasic-banner.png";
				break;
			case '2' :
				document.getElementById("customTheme").href = "assets/css/pandatheme.css";
				banner1.src = "images/foxbasic-banner.png";
				banner2.src = "images/hippobasic-banner.png";
				banner3.src = "images/tigerbasic-banner.png";
				break;
			case '3' :
				document.getElementById("customTheme").href = "assets/css/foxtheme.css";
				banner1.src = "images/pandawinner-banner.png";
				banner2.src = "images/hippobasic-banner.png";
				banner3.src = "images/tigerbasic-banner.png";
				break;
			case '4' :
				document.getElementById("customTheme").href = "assets/css/tigertheme.css";
				banner1.src = "images/pandawinner-banner.png";
				banner2.src = "images/foxbasic-banner.png";
				banner3.src = "images/hippobasic-banner.png";
				break;
		}
	}
}

loadTheme();

// Change the winner
function setWinner(vainqueur){ // A redéfinir
	localStorage.setItem("vainqueur", vainqueur);
}

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("modalSignIn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
	document.body.classList.add('stop-scrolling');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	document.body.classList.remove('stop-scrolling');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		document.body.classList.remove('stop-scrolling');
    }
}

// Sign up
function register(form){
	
	return false;
}

// Log in
function login(){
	var login = document.getElementById("loginL").value;
	var pwd = sha256.hex(document.getElementById("pwdL").value);
	var message = document.getElementById("MsgModal");
	// create a request for the server
	var xhttp = new XMLHttpRequest();
	// prepare the receive
    xhttp.onreadystatechange = function callback(aEvt){
		alert(this.status + " " + this.readyState);
        if(this.readyState==4 && this.status==200){
			// transform JSON to javascript array
            var response = JSON.parse(this.responseText);
			alert(response[0].status);
			if(response[0].status==false){
				message.innerHTML=response[0].reason;
			}else{
				message.innerHTML="</p>logged in, welcome !</p>";
				window.location.replace("starter.html");
			}
		}
    };
	// send a request
    xhttp.open("POST", "http://192.168.180.129/GreenWalk/login", true); // true : asynchronous request
	xhttp.send('{"login":"' + login + '","password":"' + pwd + '"}');
}