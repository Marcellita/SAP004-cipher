const cipher = {
   encode: function  (offset, string){

     const frase = string.toUpperCase(); 
     const numberoffset = offset;
     let resultado = "";

    for (let i = 0; i <frase.length; i ++){
      const posicaodaletra=frase.charCodeAt(i);
       resultado = resultado + String.fromCharCode(((posicaodaletra - 65 + numberoffset) % 26) + 65);
     } return resultado;
  },

  decode: function (offset, string) {
    const frase = string.toUpperCase(); 
     const numberoffset = offset;
     let resultado = "";
   
     for (let i = 0; i <frase.length; i ++){
      const posicaodaletra=frase.charCodeAt(i);
      resultado = resultado + String.fromCharCode(((posicaodaletra + 65 - numberoffset) % 26) + 65);
    }return resultado;
  }
};

export default cipher;


