
function dividir(v1, v2){
	if(v2 != 0){
		return v1/v2;
	}
}


function somar(v1, v2){
	return v1+v2;
}

function load(){
	var butao = document.getElementById("butao");
	
	butao.addEventListener("click",function (){
		var input1 = document.getElementById("valor1").value;
		var input2 = document.getElementById("valor2").value;

		input1 = parseFloat(input1);
		input2 = parseFloat(input2);

		var resposta = document.getElementById("resposta");

		// resposta.innerHTML = somar(input1, input2);
		resposta.innerHTML = dividir(input1, input2);
		// console.log("valor1: " + input1 + " \n valor2: " + input2);
		// console.log(input1 + input2);




		///VAMOS MECHER COM SUBSTRINGS

		var python = "Eric6 e Spyder3 são IDEs para Python";
		var ide = python.slice(8,14);
		resposta.innerHTML = ide;




		//conversão
		//usando input1
		var hexadecimal = "hexadecimal: " + input1.toString(16);
		var bin = "binario: " + input1.toString(2);
		var oc = "octal: " + input1.toString(8);

		resposta.innerHTML = oc;


	});

	var banner = document.getElementById("banner");
	banner.addEventListener("mouseover", function(){
		alert("tu ta no banner!")
	});

	var input1 = document.getElementById("valor1");

	input1.addEventListener("keydown", function(e){
		var esc = e.keyCode;

		if( esc == 27){//27 eh o btn ESC
			alert("BOTAO ESC PRESSIONADO!");//funciona quando pressiona esc no input1
		} 
	});
}





document.addEventListener("DOMContentLoaded", load, false);