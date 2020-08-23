const cipher = {
  encode: function  (offset, string){
    if( offset <= "0" || string === " " || typeof offset !== "number" || typeof string !== "string"){
      throw new TypeError;
    }
    let result = "";

  for (let i = 0; i <string.length; i ++){
    let letter_position = string.charCodeAt(i);
    result +=String.fromCharCode(((letter_position - 65 + offset) % 26) + 65);
    } 
  return result;
},
  decode: function (offset, string) {
    let result= "";
      for (let i = 0; i <string.length; i ++){
    let letter_position=string.charCodeAt(i);
    result +=String.fromCharCode(((letter_position + 65 - offset) % 26) + 65);
  }
  return result;
}
};
export default cipher;


