function balancerProposition(champ){	
	if (yggdrasil != null){
		preparerCode();
		retournerCode(yggdrasil);
		champ.value = proposition;		
	}
}

function definirValeurBasesEtScrambleur(champNbCles,champValCles){
	valCles = parseInt(champValCles.value);
	nbCles = parseInt(champNbCles.value);
	definirScrambleur();
}

/*
Précondition : proposition est correctement initialisée
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

function setNbClesValClesChamps(champNbCles,champValCles,nbClesToSet,valClesToSet){
	champNbCles.value = nbClesToSet;
	champValCles.value = valClesToSet;
}