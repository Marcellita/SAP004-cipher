const cipher = {
  encode: function  (offset, string){
    if( offset <= "0" || string === " " || typeof offset !== "number" || typeof string !== "string"){
      throw new TypeError;
    }
    let resultado = "";

  for (let i = 0; i <string.length; i ++){
    let posicaodaletra = string.charCodeAt(i);
    resultado +=String.fromCharCode(((posicaodaletra - 65 + offset) % 26) + 65);
    } 
  return resultado;
},
  decode: function (offset, string) {
    let resultado = "";
      for (let i = 0; i <string.length; i ++){
    let posicaodaletra=string.charCodeAt(i);
    resultado +=String.fromCharCode(((posicaodaletra + 65 - offset) % 26) + 65);
  }
  return resultado;
}
};
export default cipher;


