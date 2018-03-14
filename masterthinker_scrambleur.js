
	


/*Renvoie l'indice de la lettre dans le scrambleur. 
Exemple : si scrambleur = 'CDFAEB', indiceScrambleur('A') = 3, indiceScrambleur('E') = 4...*/
function indiceScrambleur(lettre){
	return retroScrambleur[positionApresA(lettre)];
}