function testTeam(){
	
}

function testLogin(){
	var user = sessionStorage.getItem('idUser');
	if(user!=null){
		var nameUser = sessionStorage.getItem('nameUser');
		var score = sessionStorage.getItem('scoreUser');
		var team = sessionStorage.getItem('teamUser');
		if(nameuser==null || score==null || team==null){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState==4 && this.status==200){
					var response = JSON.parse(this.responseText);
					nameuser = response[0].data.prenom + response[0].data.nom;
					score = response[0].data.score;
					team = response[0].data.team;
					sessionStorage.setItem('nameUser', nameuser);
					sessionStorage.setItem('scoreUser', score);
					sessionStorage.setItem('teamUser', team);
				}
			};
			xhttp.open("GET", "http://localhost/GreenWalk/API/users/" + user, false); // true : asynchronous request
			xhttp.send();
		}
		document.getElementById("nameUser").innerHTML = nameuser;
		switch(team){
			case 1 :
				document.getElementById("imgUser").src = "../images/hippowinner.png";
				break;
			case 2 :
				document.getElementById("imgUser").src = "../images/pandawinner.png";
				break;
			case 3 :
				document.getElementById("imgUser").src = "../images/foxwinner.png";
				break;
			case 4 :
				document.getElementById("imgUser").src = "../images/tigerwinner.png";
				break;
		}
	}else{
		window.location.replace("../index.html");
	}
}

testLogin();