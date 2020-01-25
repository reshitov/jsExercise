let numb1 = 5;
function isPrimenumber(numb){
	var x=numb,
		res=true;
	
	for (var i=2;i<x;i++){
		if(x<=1 || x%i==0){
			res=false;
			break;
		}	
	};

	var number=(x>1 && res)?x+" простое":x +" Err";
	alert(number);
};
isPrimenumber(numb1);
