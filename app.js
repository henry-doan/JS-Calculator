function btn(x) {
	result.innerHTML += x;
}

function calulate(){
	result.innerHTML = eval(result.innerHTML);
}

function doOver(){
	result.innerHTML = '';
}

function sinFun(){
	result.innerHTML = Math.sin(result.innerHTML);
}

function cosFun(){
	result.innerHTML = Math.cos(result.innerHTML);
}

function tanFun(){
	result.innerHTML = Math.tan(result.innerHTML);
}

function squareRoot(){
	result.innerHTML = Math.sqrt(result.innerHTML);
}

function cscFun(){
	result.innerHTML = 1 / Math.sin(result.innerHTML);
}

function secFun(){
	result.innerHTML = 1 / Math.cos(result.innerHTML);
}

function cotFun(){
	result.innerHTML = 1 / Math.tan(result.innerHTML);
}

function absoluteV(){
	result.innerHTML = Math.abs(result.innerHTML);
}

function arcSine(){
	result.innerHTML = Math.asin(result.innerHTML);
}

function arcCosine(){
	result.innerHTML = Math.acos(result.innerHTML);
}

function arcTangent(){
	result.innerHTML = Math.atan(result.innerHTML);
}

function squareRootTwo(){
	result.innerHTML = Math.SQRT2;
}

function ranNum(){
	result.innerHTML = (Math.random()* 11);
}

function anatLogTwo(){
	result.innerHTML = Math.LN2(result.innerHTML);
}

function natLogTen(){
	result.innerHTML = Math.LN10(result.innerHTML);
}

function roundUp(){
	result.innerHTML = Math.ceil(result.innerHTML);
}

function roundDown(){
	result.innerHTML = Math.floor(result.innerHTML);
}