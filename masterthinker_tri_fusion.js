/*Renvoie la version triée selon les clés dans le scrambleur et épurée de doublons d'une liste libre*/
function trier(ll){
	var reponse = ll.sort(function(e,f){
		return (indiceScrambleur(e.c)-indiceScrambleur(f.c));
	});
	
	//Attention, on n'a pas épuré des doublons
	return ll;
	
}

/*Renvoie la version fusionnée de deux listes libres triées par ordre croissant d'indiceScrambleur des clés*/
function fusionner(ll1,ll2){
	
	
}
	

	
	