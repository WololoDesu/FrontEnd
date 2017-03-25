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

function setWinner(vainqueur){ // A redéfinir
	localStorage.setItem("vainqueur", vainqueur);
}

loadTheme();