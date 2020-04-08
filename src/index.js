import cipher from './cipher.js';
const botaoCifra = document.getElementById("cifra");
const botaoDecifra = document.getElementById("decifra");
const frase = document.getElementById("palavra");
const numberoffset = document.getElementById("desloc");

botaoCifra.addEventListener("click",ResultadoCifra);

function ResultadoCifra(){
   
   document.getElementById("resultado").innerHTML = cipher.encode(numberoffset, frase);

}

botaoDecifra.addEventListener("click",ResultadoDecifra);

function ResultadoDecifra(){
  
   document.getElementById("resultado").innerHTML = cipher.decode(numberoffset, frase);
   
}



