/*
Lorsque le maître donne le code que le devin était supposé trouver, le devin teste la validité de ce code vis-à-vis des nombres et valeurs des clés, mais aussi des propositions du devin.
*/

/*
Teste si le code proposé - par un humain - est : 1) cohérent vis-à-vis de nbCles et valCles 2) cohérent vis-à-vis de toutes les propositions
*/
function testerCoherenceCodeHumain(propositionHumaine){
	if (!testerCoherenceAuxParams(propositionHumaine)){
		alert("Ce code n'est pas cohérent avec la taille ("+nbCles+") ou les valeurs possibles (de A à "+String.fromCharCode(valCles+posA-1)+"). Est-ce une erreur de frappe ou le code a mal été pensé ? En outre, des majuscules sont attendues.");
	}
	else{
		var ok = true;
		var i = 0;
		while(i < historique_bp.length && ok){
			ok = testerCoherenceAuCodeUltime(historique_propositions[i],historique_bp[i],historique_mp[i],propositionHumaine);
			if (ok){
				i++;
			}
		}
		if (!ok){
			alert("L'IA conteste : "+historique_propositions[i]+" "+historique_bp[i]+" "+historique_mp[i]+" "
			+" n'est pas cohérent avec le code "+propositionHumaine+ ". Sois plus attentif la prochaine fois.");
		}
		else{
			alert("L'IA n'a pas trouvé. Bravo...");
		}
	}
}
	
	/*
	Teste si la proposition de gauche est correcte en termes de bp et de mp à celle de droite
	*/
	function testerCoherenceAuCodeUltime(proposition,bp,mp,codeFinal){
		var dejaPris = []; //Indique si une clé est prise par les bp
		var vraisBP = 0;
		var vraisMP = 0;
		var occurencesMP = new Array(valCles);
		var i;
		for(i=0;i<valCles;i++){
			occurencesMP[i] = 0;
		}
		//Passe des bp et signalisation des lettres MP dans proposition
		for(i=0;i<nbCles;i++){
			if (proposition.charAt(i) == codeFinal.charAt(i)){
				vraisBP++;
				dejaPris.push(true);
			}
			else{
				dejaPris.push(false);
				occurencesMP[positionApresA(codeFinal.charAt(i))]++;
			}
		}
		if (vraisBP != bp){
			return false;
		}
		//Passe des mp
		for(i=0;i<nbCles;i++){
			if(!dejaPris[i] && occurencesMP[positionApresA(proposition.charAt(i))] > 0){
				vraisMP++;
				occurencesMP[positionApresA(proposition.charAt(i))]--;
			}
		}
		return vraisMP == mp;
	}
	
/*
Teste si une proposition est cohérente avec les valeurs de nbCles et valCles
*/
function testerCoherenceAuxParams(propositionHumain){
	if (propositionHumain.length != nbCles){
		return false;
	}
	var i=0;
	var ok = true;
	var posApresA;
	while(i<nbCles && ok){
		posApresA = positionApresA(propositionHumain.charAt(i));
		if (posApresA < 0 || posApresA >= valCles){
			ok = false;
		}
		else{
			i++;
		}
	}
	return ok;
}

