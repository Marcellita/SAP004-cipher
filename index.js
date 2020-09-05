import cipher from './cipher.js';
   let btnCipher = document.getElementById("btn_cipher");
   let btnDecipher= document.getElementById("btn_decipher");

   btnCipher.addEventListener("click",resultCipher);
   btnDecipher.addEventListener("click",resultDecipher);

   function resultCipher(){
   let phrase = document.getElementById("message").value;
   let numberoffset = Number(document.getElementById("displacement").value);
   let encryption = document.getElementById("deciphered_message");
   encryption.innerHTML = cipher.encode(numberoffset,phrase);
}
   function resultDecipher(){
   let phrase = document.getElementById("message").value;
   let numberoffset = Number(document.getElementById("displacement").value);
   let encryption = document.getElementById("deciphered_message");
   encryption.innerHTML = cipher.decode(numberoffset,phrase);
}




