var scrambleurAlea = true;


var debugChaineMode = false;
var debugBoucleMode = false;
var debugConstructionMode=true;
var debugExplorationMode = true;
//debugLegacyMode = true;
var debugChaineExploMode = false;
var indentConst = 0;
var indentExplo = 0;
//indentLegacy = 0;


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

/*function debugLegacy(chaine){
	if (debugLegacyMode){
		var espaces="";
		for(var i=0;i<indentLegacy;i++){
			espaces+=" ";
		}
		console.log(espaces+chaine);		
	}
}*/
	
function indenterExplo(){
	indentExplo+=3;
}
function desindenterExplo(){
	indentExplo-=3;
}

/*function indenterLegacy(){
	indentLegacy+=3;
}
function desindenterLegacy(){
	indentLegacy-=3;
}*/

function debugChaineExplo(chaine){
	if (debugChaineExploMode)
		console.log(chaine);
}