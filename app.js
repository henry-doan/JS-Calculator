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