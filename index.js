import cipher from './cipher.js';
   let botaoCifra = document.getElementById("cifra");

   function ResultadoCifra(){
   let frase = document.getElementById("palavra").value;
   let numberoffset = Number(document.getElementById("desloc").value);
   let cifragem = document.getElementById("resposta");
   cifragem.innerHTML = cipher.encode(numberoffset,frase);

}
botaoCifra.addEventListener("click",ResultadoCifra);


let botaoDecifra = document.getElementById("decifra");

function ResultadoDecifra(){
   let frase = document.getElementById("palavra").value;
   let numberoffset = Number(document.getElementById("desloc").value);
   let decifragem = document.getElementById("resposta");
   decifragem.innerHTML = cipher.decode(numberoffset,frase);
}

botaoDecifra.addEventListener("click",ResultadoDecifra);



