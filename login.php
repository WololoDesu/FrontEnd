
	<?php
		/*
			Fonction de verif de mdp
				boolean password_verify ( string $password , string $hash )
			Fonction de hachage à utiliser pour creer le compte
				string password_hash($_POST["password"], PASSWORD_DEFAULT)
		*/
		
		define('LOGIN','admin'); 		// vieux Hardcodage a retirer
		define('PASSWORD','mdp');
		if(isset($_POST['bLogin'])){
			$_SESSION['auth']=($_POST['login']==LOGIN && $_POST['password']==PASSWORD); // Remplacer par un appel de validation par l'API
			// $hashed = getHashedPassword($_POST["login"]);
			$hashed = password_hash($_POST["password"], PASSWORD_DEFAULT); //MOCK 
			// Tester $hashed pour valider le succes de l'appel BDD
			if(password_verify($_POST["password"], $hashed)){
				$_SESSION["auth"]=true;
			}
			
			
		}elseif(isset($_POST['bLogout'])){
			$_SESSION['auth']=false;
		}
		
		echo "<form id='bandeauLogin' action='' method='post'>";
		
		if(isset($_SESSION['auth']) && $_SESSION['auth']){	// On est authentifié
			echo "<input type='submit' name='bLogout' value='Deconnexion'/>";
		}else{												// On l'est pas
			echo "Login : <input type='text' name='login' /> &nbsp;\n";
			echo "Password : <input type='text' name='password'/> &nbsp;\n";
			echo "<input type='submit' name='bLogin' value='Connexion'/> &nbsp;\n";
			if(isset($_POST['bLogin'])) echo "Connexion échouée\n";
		}
		echo "</form>";
	?>
