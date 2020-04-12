const cipher = {
  encode: function  (offset, string){
    if 
     ( offset <= "0" || string == " " || typeof offset != "number" || typeof string != "string"){

           throw new TypeError;
       }
    
    let frase = string; 
    let numberoffset = offset;
    let resultado = "";

   for (let i = 0; i <frase.length; i ++){
     let posicaodaletra= frase.charCodeAt(i);
      resultado = resultado + String.fromCharCode(((posicaodaletra - 65 +numberoffset) % 26) + 65);
    } return resultado;
    
 },
 

 decode: function (offset, string) {
    let frase = string; 
    let numberoffset = offset;
    let resultado = "";
  
    for (let i = 0; i <frase.length; i ++){
     let posicaodaletra=frase.charCodeAt(i);
     resultado = resultado + String.fromCharCode(((posicaodaletra + 65 -  numberoffset) % 26) + 65);
   }return resultado;
 }
};

export default cipher;


