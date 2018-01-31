
/*JAVASCRIPT FOR STARTING SLIDING EFFECT ON HOMEPAGE*/

function destroyer() {
	
	document.getElementById('mover').style.display="none";
	document.getElementById('holder').style.display="none";
	}
	function creator (){
	
	var x= document.getElementById('imagediv');
	x.style.display="block"; x.style.animationName="loadpic";
		}
	setTimeout(destroyer, 1000);
	setTimeout(creator, 1001);