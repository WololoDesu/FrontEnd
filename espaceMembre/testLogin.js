function testTeam() {
	var team = sessionStorage.getItem('teamUser');
	var CheminComplet = document.location.href.split("/");
	var page = CheminComplet[CheminComplet.length - 1]
	if(team==null && page!="chooseTeam.html"){
		window.location.replace("chooseTeam.html");
	}
}

function testLogin() {
    var user = sessionStorage.getItem('idUser');
    if (user != null) {
        var nameUser = sessionStorage.getItem('nameUser');
        var score = sessionStorage.getItem('scoreUser');
        var team = sessionStorage.getItem('teamUser');
        if (nameUser == null || score == null || team == null) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var response = JSON.parse(this.responseText);
                    nameUser = response.data.prenom + ' ' + response.data.nom;
                    score = response.data.score;
                    team = response.data.idTeam;
                    sessionStorage.setItem('nameUser', nameUser);
                    sessionStorage.setItem('scoreUser', score);
                    sessionStorage.setItem('teamUser', team);
                }
            };
            xhttp.open("GET", "http://localhost/GreenWalk/API/users/" + user, false); // true : asynchronous request
            xhttp.send();
        }
        document.getElementById("nameUser").innerHTML = nameUser;
        switch (team) {
            case '1' :
                document.getElementById("imgUser").src = "../images/hippowinner.png";
                break;
            case '2' :
                document.getElementById("imgUser").src = "../images/pandawinner.png";
                break;
            case '3' :
                document.getElementById("imgUser").src = "../images/foxwinner.png";
                break;
            case '4' :
                document.getElementById("imgUser").src = "../images/tigerwinner.png";
                break;
        }
		testTeam();
    } else {
        window.location.replace("../index.html");
    }
}

function logout(){
	sessionStorage.clear();
	window.location.replace("../index.html");
}

testLogin();