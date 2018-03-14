var proposition;
var valMinTest = -1; //Indice dans le scrambleur de la première clé testée par cette proposition et non testée par les précédentes.
var valMaxTest = -1; //Indice dans le scrambleur de la dernière clé testée par toutes les propositions.
/*Les deux variables valent valCles si on a déjà testé toutes les clés à la proposition précédente
Exemple : 
1ère proposition = 'ABCDAB' : valMinTest = 0, valMaxTest = 3 pour la résolution ; car on teste les clés de A à D (à la 1ère résolution on a toujours valMinTest = 0)
2ème proposition = AEFDCG : valMinTest = 4, valMaxTest = 6 (car les nouvelles clés testées sont de E à G)
*/
var tableauChaine;
var occurencesTC; 
/*Nombre de fois qu'il est encore possible de mettre chaque lettre dans tableauChaine ; tableau ordonné selon les valeurs du scrambleur 
(exemple : si scrambleur = 'ABCDEF', proposition = 'ABCDAB' on a au départ tableauChaine = '------' et donc occurencesTC = [2,2,1,1,0,0] ; 
si à un moment où tableauChaine= 'BBA---' on a occurencesTC = [1,0,1,1,0,0])*/
var nbPlacesLibres;
/*nombre de places libres dans tableauChaines*/



/*Réinitialise tableauChaine, nbPlacesLibres et ajuste occurencesTC à la proposition
Prérequis : on est dans un contexte d'initialisation. On connait nbCles et valCles
*/
function resetTC(){
	tableauChaine = new Array(nbCles);
	occurencesTC = new Array(valCles);
	var i;
	for(i=0;i<nbCles;i++)
		tableauChaine[i] = '-';
	nbPlacesLibres = nbCles ; //En permanence égal au nombre de '-' dans tableauChaine.
	for(i=0;i<valCles;i++){
		occurencesTC[i] = 0;
	}
	for(i=0;i<nbCles;i++){
		occurencesTC[indiceScrambleur(proposition.charAt(i))]++;
	}
	console.log("Voici le tableau des occurences : ",occurencesTC);
}


/*
Adapte à position les valeurs de valMinTest et valMaxTest
Prérequis : Une nouvelle valeur de "proposition" est en place dans tableauChaine. 
Ensuite : valMinTest = valMaxTest de la précédente proposition+1. Sauf si les 2 étaient déjà à valCles. (la 1ère fois, on considère que valMinTest = 0 et valMaxTest = après.
*/
function setValMinMax(){
	if(valMinTest < valCles){
		valMinTest = valMaxTest+1;
		valMaxTest = valMinTest;
		/*do{
			valMaxTest++;
		}while((valMaxTest < valCles) && (occurencesTC[valMaxTest] > 0));*/
		while((valMaxTest < valCles) && (occurencesTC[valMaxTest] > 0)){
			valMaxTest++;
		}
		valMaxTest--;			
	}
}


function genererCodeSuivant(valCleMin){
	reponse = "";
	var alea;
	for(var i=0;i<nbCles;i++){
		if (i < valCles){
			reponse+=scrambleur[i+valCleMin];
		}
		else{
			alea = aleatoire(valCleMin,valCles-1);
			reponse+=scrambleur[alea];
		}
	}
	return reponse;
	
}