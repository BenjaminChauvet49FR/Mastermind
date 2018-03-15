﻿var scrambleurAlea = true;


var debugChaineMode = false;
var debugBoucleMode = false;
var debugConstructionMode=true;
var debugExplorationMode = true;
var debugChaineExploMode = false;
var indentConst = 0;
var indentExplo = 0;


function debugChaine(chaine){
	if (debugChaineMode)
		console.log(chaine);
}
function debugBoucle(chaine){
	if (debugBoucleMode)
		console.log(chaine);
}

function debugConst(chaine){
	if (debugConstructionMode){
		var espaces="";
		for(var i=0;i<indentConst;i++){
			espaces+=" ";
		}
		console.log(espaces+chaine);		
	}
}
function indenterConst(){
	indentConst+=3;
}
function desindenterConst(){
	indentConst-=3;
}

function debugExplo(chaine){
	if (debugExplorationMode){
		var espaces="";
		for(var i=0;i<indentExplo;i++){
			espaces+=" ";
		}
		console.log(espaces+chaine);		
	}
}

	
function indenterExplo(){
	indentExplo+=3;
}
function desindenterExplo(){
	indentExplo-=3;
}

function debugChaineExplo(chaine){
	if (debugChaineExploMode)
		console.log(chaine);
}

function debugExploValidation(llFinal){
	debugExplo("("+cTableauChaine()+") OK, on valide avec "+chaineCL(llFinal));	
}
