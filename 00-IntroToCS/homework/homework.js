function BinarioADecimal(num) {
  // tu codigo aca
  var numeros = [];
  while(num >= 1){
				
	numeros.push(num%10);
	num = Math.trunc(num / 10);
	}
	var decimal = 0;
	cont = 0;
	for(var i = 0; i < numeros.length; i ++){
		//document.write('<br>Numero: '+numeros[i])
				
		decimal = decimal + numeros[i] *Math.pow(2,cont);
		//document.write('<br>Decimal: '+decimal)
				
		cont++;
				
	}
	return decimal;

}

function DecimalABinario(num) {
  // tu codigo aca
  var numeros = [];
  while(num >= 1){
				
	numeros.push(num%2);
	num = Math.trunc(num / 2);
	}
	numeros = numeros.reverse()
	//var multiplicador = 100
	var binario = ''
	for(var i = 0; i < numeros.length; i ++){
		binario = binario + ''+ numeros[i];
		//multiplicador = multiplicador / 10;
	}
	return binario;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}