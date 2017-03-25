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

function register(form){
	
}

function setWinner(vainqueur){ // A redéfinir
	localStorage.setItem("vainqueur", vainqueur);
}