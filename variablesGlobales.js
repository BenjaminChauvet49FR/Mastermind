/*
Constantes
*/
var posA = 65; 

/*
Liste de toutes les variables globales + initialisation de certaines d'elles.
*/
var yggdrasil = null; 
var dejaYggrasil = false; //vaut true si on a déjà une valeur d'yggdrasil existante, false sinon. Testée et mise à jour dans la fonction lorsqu'on soumet une nouvelle proposition.
var historique_propositions = []; //Liste des propositions du devin
var historique_bp = []; //Liste des "nombres de clés bien placées" correspondant au tableau historique_propositions
var historique_mp = []; //Liste des "nombres de clés mal placées" correspondant au tableau historique_propositions
var ancienneProposition; //????

var nbCles = 0; //Nombre de clés qui composent le code
var valCles = 0; //Nombre de valeurs différentes
var scrambleur = []; 
var retroScrambleur; /*Donne la position de chaque lettre de l'alphabet dans le scrambleur. Exemple : scrambleur = 'BHCAFDEG' => retroScrambleur = [3,0,2,5,6,4,7,1]*/

//Relatif à la sélection de code dans masterthinker_selection.js
var totalPossibilites; //Nombre total de possibilités dans le code
var possibilites //Valeur de retour de la fonction "nbPossibilites". Ajoutée à totalPossibilites, puis testée pour sélectionner aléatoirement un nouveau code.
var codePourSelection = []; // Tableau de lettres pour parcourir un code

var proposition;
var valMinTest = -1; //Indice dans le scrambleur de la première clé testée par cette proposition et non testée par les précédentes.
var valMaxTest = -1; //Indice dans le scrambleur de la dernière clé testée par toutes les propositions.
/*Les deux variables valent valCles si on a déjà testé toutes les clés à la proposition précédente
Exemple : 
1ère proposition = 'ABCDAB' : valMinTest = 0, valMaxTest = 3 pour la résolution ; car on teste les clés de A à D (à la 1ère résolution on a toujours valMinTest = 0)
2ème proposition = AEFDCG : valMinTest = 4, valMaxTest = 6 (car les nouvelles clés testées sont de E à G)
*/

var tableauChaine; //Tableau utilisé dans la construction du code
var occurencesTC; 
/*Nombre de fois qu'il est encore possible de mettre chaque lettre dans tableauChaine ; tableau ordonné selon les valeurs du scrambleur 
(exemple : si scrambleur = 'ABCDEF', proposition = 'ABCDAB' on a au départ tableauChaine = '------' et donc occurencesTC = [2,2,1,1,0,0] ; 
si à un moment où tableauChaine= 'BBA---' on a occurencesTC = [1,0,1,1,0,0])*/
var nbPlacesLibres; //nombre de places libres dans tableauChaine




/*
document.getElementById s. Certains ne servent que dans un fichier.
*/
var input_nbCles = document.getElementById("input_nbCles");
var input_valCles = document.getElementById("input_valCles");
var div_preparation = document.getElementById("div_preparation");
var div_resume = document.getElementById("div_resume");
var div_liste_propositions = document.getElementById("div_liste_propositions");
var div_proposition = document.getElementById("div_proposition");
var div_proposition_commune = document.getElementById("div_proposition_commune");
var div_ultime_proposition = document.getElementById("div_ultime_proposition");
var div_code_impossible = document.getElementById("div_code_impossible");


