"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0 ; 
for ( var i = 0 ; i < num.length ; i++ ) {
decimal = decimal + num[i] * 2 ** (num.length -1 -i) ; }
return decimal ; }

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '' ; 
  while ( num > 0 ) { 
    binario = (num % 2 ) + binario ; 
    num = Math.floor(num / 2) ; 
  }
  return binario ; 
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
