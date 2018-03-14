var yggdrasil = null;
var nbCles = 0; //Nombre de clés qui composent le code
var valCles = 0; //Nombre de valeurs différentes
var scrambleur = []; 
var retroScrambleur; /*Donne la position de chaque lettre de l'alphabet dans le scrambleur. Exemple : scrambleur = 'BHCAFDEG' => retroScrambleur = [3,0,2,5,6,4,7,1]*/


/*Définit le scrambleur et le rétroscrambleur ; affiche le scrambleur.
Prérequis : aucun scrambleur n'est défini. chaineScrambleur est une permutation des 1ères lettres de l'alphabet sans en oublier ni en répéter. Exemple : 'BDCEFA' ou 'CHBAIEGF' ou 'ABCDEFGHIJKL'*/
function definirScrambleur(){
	var i,j,alea;
	var reste = valCles; //Nombre restant de lettres
	var pos; //Position dans le placement de chaque lettre
	scrambleur = new Array(valCles);
	retroScrambleur = new Array(valCles);
	for(i=0;i<valCles;i++){
		scrambleur[i] = '-';
	}
	
	//Choisir l'un des deux scrambleurs ci-dessous : alphabétique ou aléatoire
	if (scrambleurAlea){
		for(i=0;i<valCles;i++){ //Glisser aléatoirement les valeurs A,B,... dans scrambleur.
			alea = aleatoire(1,reste);
			pos = 0;
			for(j=0;j<alea;j++){
				while(scrambleur[pos]!='-')
					pos++;
				pos++;
			}
			reste--;
			pos--;
			scrambleur[pos]=String.fromCharCode(i+posA);
		}		
	}
	else{
		for(i=0;i<valCles;i++){ //Scrambleur alphabétique ([A,B,...])
			scrambleur[i] = String.fromCharCode(i+posA);
		}	
	}
	
	
	console.log("Scrambleur : "+scrambleur);
	for(i=0;i<valCles;i++){
		retroScrambleur[positionApresA(scrambleur[i])] = i;
	}
	/*Affichage*/
	console.log("Voici le tableau de rétroScrambleur : ",retroScrambleur);
}	