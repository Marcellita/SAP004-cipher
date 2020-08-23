let btnEnviar = document.getElementById('enviar')
btnEnviar.addEventListener('click', enviarForm)


function enviarForm (e) {
  e.preventDefault();
  let nome = document.getElementById('nome').value
  let telefone = document.getElementById('cel').value
  let email = document.getElementById('email').value
  let endereco = document.getElementById('endereco').value
  let complemento = document.getElementById('compl').value
  let obervacao = document.getElementById('message').value
  let mostragem = document.getElementById('form')
  mostragem.innerHTML = ` Formulário enviado com sucesso` 
  let dados = document.getElementById('dados')
  dados.innerHTML= `Os dados enviados foram:
    ${nome},<br>
    ${telefone},
    ${email},
    ${endereco},
    ${complemento},
    ${obervacao},
  `
}
