/* 
Cette page contient tous les addEventListener (AEL) du fichier mastermind.html :
les instructions, mais aussi les définitions des fonctions
*/

/*
Instructions AEL pour placer rapidement le nombre et les valeurs des clés dans les champs
*/	
document.getElementById("clic_prepa306").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,3,6);
});
document.getElementById("clic_prepa408").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,4,8);
});
document.getElementById("clic_prepa510").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,5,10);
});
document.getElementById("clic_prepa612").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,6,12);
});
document.getElementById("clic_prepa426").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,4,26);
});
document.getElementById("clic_prepa412").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,4,12);
});
document.getElementById("clic_prepa516").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,5,16);
});
document.getElementById("clic_prepa616").addEventListener('click',function(e){
	setNbClesValClesChamps(input_nbCles,input_valCles,6,16);
});

/*
Définition AEL pour placer rapidement le nombre et les valeurs des clés dans les champs
*/
function setNbClesValClesChamps(champNbCles,champValCles,nbClesToSet,valClesToSet){
	champNbCles.value = nbClesToSet;
	champValCles.value = valClesToSet;
}


//------
// Début de partie

/*
Instruction AEL pour démarrer une nouvelle partie. Le devin fait une première proposition tout de suite.
*/
document.getElementById("clic_preparation").addEventListener('click',function(e){
	div_preparation.style.display="none";
	div_resume.style.display="block";
	div_proposition.style.display="block";
	div_proposition_commune.style.display = "block";
	div_liste_propositions.style.display = "block";
	document.getElementById("span_infoNbCles").innerHTML = input_nbCles.value;
	document.getElementById("span_infoValCles").innerHTML = String.fromCharCode(parseInt(input_valCles.value)+posA-1)+"";
	changerCouleurElt(document.getElementById("clic_reponse"),"#ffff00");
	demarrerPartie({
		nombreCles : parseInt(input_nbCles.value),
		valeurCles : parseInt(input_valCles.value)
	});
	document.getElementById("proposition").innerHTML = proposition;
	div_liste_propositions.innerHTML = "";
});

/*
Instruction AEL pour arrêter la partie en cours
*/
document.getElementById("clic_retour").addEventListener('click',function(e){
	div_preparation.style.display="block";
	div_resume.style.display="none";
	div_proposition.style.display="none";
	div_liste_propositions.style.display = "none";
	div_ultime_proposition.style.display = "none";
	div_code_impossible.style.display = "none";
 
});

//------
/*
Instructions du clic sur le bouton d'indication du nombre de bien placés/mal placés
*/
document.getElementById("clic_reponse").addEventListener('click',function(e){
	var bp = parseInt(document.getElementById("input_bons").value);
	var mp = parseInt(document.getElementById("input_mauvais").value);
	//Test de cohérence
	if (isNaN(bp) || isNaN(mp)){
		alert("Merci de saisir des valeurs numériques.");
		return;
	}
	if (bp < 0 || mp < 0 || bp+mp > nbCles || ((bp == nbCles-1)&&(mp == 1))){
		alert("Merci de saisir des valeurs cohérentes.");
		return;
	}
	
	changerCouleurElt(document.getElementById("clic_reponse"),"#ff0000");
	if(bp==nbCles && mp==0){
		//style
		alert("Super ;)");
		div_liste_propositions.innerHTML += chaineNouveauSpanBon(proposition);
	}
	else{
		testerProposition(bp,mp);
		var ancienneProposition=proposition;
		preparerCodePourSelection();
		dejaYggrasil = (dejaYggrasil || (yggdrasil != null && yggdrasil.length > 0));
		
		if (dejaYggrasil){
			retournerCode(yggdrasil);
			debugExplo("Nombre de possibilités = "+totalPossibilites);
			if (totalPossibilites == 1){
				//semi-style
				ajouter_proposition(bp,mp,ancienneProposition);
				ajouter_propositionHTML(bp,mp,ancienneProposition);
				//style
				debugExplo("Alerte ! Plus qu'une possibilité !");
				document.getElementById("span_ultime_proposition").innerHTML = proposition;
				document.getElementById("div_ultime_proposition").style.display = "block";
				document.getElementById("div_proposition_commune").style.display = "none";
				document.getElementById("input_bons").style.enabled=false;
				document.getElementById("input_mauvais").style.enabled=false;	
			}
			else if (totalPossibilites == 0){
				//semi-style
				ajouter_propositionHTML_mauvais(bp,mp,ancienneProposition);
				ajouter_proposition(bp,mp,ancienneProposition);
				document.getElementById("span_ultime_proposition").innerHTML = proposition;
				document.getElementById("div_code_impossible").style.display = "block";
				document.getElementById("div_proposition_commune").style.display = "none";
			}
			else{
				ajouter_propositionHTML(bp,mp,ancienneProposition);
				ajouter_proposition(bp,mp,ancienneProposition);
			}
		}
		else{
			proposition = genererCodeSuivant(valMaxTest+1);
			ajouter_propositionHTML(bp,mp,ancienneProposition);
			ajouter_proposition(bp,mp,ancienneProposition);
		}		
	}
	
	changerCouleurElt(document.getElementById("clic_reponse"),"#ffff00");
	document.getElementById("input_bons").value = 0;
	document.getElementById("input_mauvais").value = 0;
	document.getElementById("proposition").innerHTML = proposition;
});
	



/*
Construit l'arbre yggdrasil
Précondition : proposition est correctement initialisée
Postcondition : yggdrasil contient un ensemble de possibilités
*/
function testerProposition(nbB,nbM){
	if (yggdrasil != null && yggdrasil.length > 0){
		console.log("====Exploration avec "+proposition+" "+nbB+"/"+nbM+"====");
		resetTC();
		setValMinMax();
		yggdrasil = explorer(yggdrasil,nbB,nbM);
	}
	else{
		console.log("====Construction avec "+proposition+" "+nbB+"/"+nbM+"====");
		resetClesMP();
		resetTC();
		setValMinMax();
		yggdrasil = construirePossibilites(nbB,nbM,[]);
	}	
}

/*
Ajoute un code dans les tableaux d'historique
Condition : toujours appelé aux côtés de ajouter_propositionHTML ou dérivé
*/
function ajouter_proposition(bp,mp,proposition){
	historique_propositions.push(proposition);
	historique_bp.push(bp);
	historique_mp.push(mp);
}
	
//------
// Fin de partie

/*
Instruction AEL pour signifier à l'IA qu'elle a trouvé le bon code
*/
document.getElementById("clic_ultime_oui").addEventListener('click',function(e){
	alert("Super ;)");
	div_liste_propositions.innerHTML += chaineNouveauSpanBon(proposition);
});

/*
Instruction AEL pour signifier à l'IA qu'elle s'est trompée (lui donne le bon code)
*/	
document.getElementById("clic_ultime_non").addEventListener('click',function(e){
	var ultimeCodeHumain = document.getElementById("input_reponse_finale").value;
	testerCoherenceCodeHumain(ultimeCodeHumain);
});
	
/*
Instruction AEL pour donner le code à l'IA alors ue celle-ci pense qu'il n'y en a pas
*/
document.getElementById("clic_code_impossible").addEventListener('click',function(e){
	var ultimeCodeHumain = document.getElementById("input_code_impossible").value;
	testerCoherenceCodeHumain(ultimeCodeHumain);
});


