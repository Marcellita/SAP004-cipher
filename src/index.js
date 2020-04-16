import cipher from './cipher.js';
   let botaoCifra = document.getElementById("cifra");
   let botaoDecifra = document.getElementById("decifra");

   botaoCifra.addEventListener("click",resultadoCifra);
   botaoDecifra.addEventListener("click",resultadoDecifra);

   function resultadoCifra(){
   let frase = document.getElementById("palavra").value;
   let numberoffset = Number(document.getElementById("desloc").value);
   let cifragem = document.getElementById("resposta");
   cifragem.innerHTML = cipher.encode(numberoffset,frase);
}
   function resultadoDecifra(){
   let frase = document.getElementById("palavra").value;
   let numberoffset = Number(document.getElementById("desloc").value);
   let decifragem = document.getElementById("resposta");
   decifragem.innerHTML = cipher.decode(numberoffset,frase);
}




