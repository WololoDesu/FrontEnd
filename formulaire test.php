<html>
	<head>
		<script src="./dessineCamembert.js"></script>
	</head>
	<body>
		<?php
			
			if(isset($_POST["submit"])){
				$accu=0;
				//echo "SLT";
				foreach($_POST as $key => $value){
					echo "[".$key."]"." = ".$value."<br/>";
					$accu += hash("md5", $value);
					unset($_POST[$key]);
					
				}
				echo "Team #".($accu%4);
				echo "<br/><br/> Gg ton esprit pokemon c'est salameche <br/>";
			}else{
				//echo"repond fdp";
			}
			
			
		
		?>
		<form name="questionnaire" action="./formulaire test.php" method="POST">
			<p> 
				Quel type de logement habitez vous ? <br/>
				<select name="logement" required>
					<option value="appart"> Appartement </option>
					<option value="maison"> Maison </option>
					<option value="yacht"> Yacht </option>
				</select>
			</p>
			<p> 
				A combien habitez vous dans ce logement ? <br/>
				<input name="nb_logement" type="number" value="1" min="0" step="1" required/>
			</p>
			<p> 
				A combien de kilometres de votre lieu de travail habitez vous ? <br/>
				<input name="distance_travail" type="number" value="5" min="0" required/>
			</p>
			<p> 
				Possedez vous un vehicule a moteur ? <br/>
				<input type="radio" name="vehicule" onClick="majChampsFreq('vehicule')" value="0" checked> Non </input>
				<input type="radio" name="vehicule" onClick="majChampsFreq('vehicule')" value="1"> Oui </input>
				
				<br/> A quelle frequence l'utilisez vous ? 
				<select name="vehicule_freq" disabled>
					<option value="jour"> Tous les jours </option>
					<option value="semaine"> Toutes les semaines </option>
					<option value="mois"> Tous les mois </option>
					<option value="jamais"> Jamais </option>
				</select>
			</p>
			<p> 
				Possedez vous un velo ? <br/>
				<input type="radio" name="velo" onClick="majChampsFreq('velo')" value="0" checked> Non </input>
				<input type="radio" name="velo" onClick="majChampsFreq('velo')" value="1"> Oui </input>
				
				<br/> A quelle frequence l'utilisez vous ? 
				<select name="velo_freq" disabled>
					<option value="jour"> Tous les jours </option>
					<option value="semaine"> Toutes les semaines </option>
					<option value="mois"> Tous les mois </option>
					<option value="jamais"> Jamais </option>
				</select>
			</p>
			<p> 
				Possedez vous des jambes ? <br/>
				<input type="radio" name="pied" onClick="majChampsFreq('pied')" value="0"> Non </input>
				<input type="radio" name="pied" onClick="majChampsFreq('pied')" value="1" checked> Oui </input>
				
				<br/> A quelle frequence les utilisez vous ? 
				<select name="pied_freq">
					<option value="jour"> Tous les jours </option>
					<option value="semaine"> Toutes les semaines </option>
					<option value="mois"> Tous les mois </option>
					<option value="jamais"> Jamais </option>
				</select>
			</p>
			<p> 
				Etes vous locavore ? <br/>
				<input type="radio" name="locavore" value="0" checked> Non </input>
				<input type="radio" name="locavore" value="1"> Oui </input>
			</p>
			<p> 
				Quel est votre regime alimentaire ? <br/>
				<select name="regime_alimentaire">
					<option value="omni"> Omnivore </option>
					<option value="cucumber"> Vegetarienvore </option>
					<option value="carni"> Carnivore </option>
					<option value="vegan"> Veganvore </option>
					<option value="carnassier"> Mange tes morts </option>
					<option value="apache"> Apache Helicopter </option>
				</select>
			</p>
			<p> 
				<input type="radio" name="team" value="1" checked> #TeamDouche </input>
				<input type="radio" name="team" value="2"> #TeamBain </input>
				<input type="radio" name="team" value="0"> #TeamCanal </input>
			</p>
			<input name="submit" type="submit" value="OK SLT">
		</form>
		
		<script>
			function majChampsFreq(type){
				document.questionnaire[type+"_freq"].disabled = (document.questionnaire[type].value=="0");
			}
		
		</script>
	</body>
</html>