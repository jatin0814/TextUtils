let input = document.getElementById("input");
let puncuation = document.getElementById("puncuations");
let radio = document.getElementsByName("task");
let choice = "";
let output = document.getElementById("output");


function displayRadioValue(){

for(let i=0; i<radio.length; i++){
	if(radio[i].checked){
		choice = radio[i].value;
	}
}

if(choice === "puncuations"){
	var punctuationless = input.value.replace(/[.,\/#!$%\^&\'*;:{}=\-_`~()]/g,"");
	var finalString = punctuationless.replace(/\s{2,}/g," ");
	output.innerHTML = finalString;
}

if(choice === "linebreak"){
	var str = input.value;
	var str2 = str.replace(/\n|\r/g, "");
	output.innerHTML = str2;
}
if(choice === "lowercase"){
	var str = input.value;
	output.innerHTML = str.toLowerCase();
}
if(choice === "uppercase"){
	var str = input.value;
	output.innerHTML = str.toUpperCase();
}
}

