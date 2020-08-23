# Cifra de César
 
 ***Projeto entregue em abril de 2020 porém refeito em agosto de 2020***

## 1. Prefácio

  A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
  tipo de cifra por substituição, em que cada letra do texto original é
  substituida por outra que se encontra há um número fixo de posições
  (deslocamento) mais a frente do mesmo alfabeto.

  Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

  * Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
  * Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
  * A letra A será D
  * A palavra CASA será FDVD

  Atualmente todas as cifras de substituição alfabética simples, são decifradas
  com facilidade e não oferecem muita segurança na comunição, mas a cifra de César
  muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
  a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

  A empresa La Vegan, em parceria com a maquiadora Carmem Miranda, vão lançar uma linha de maquiagem totalmente vegana.O objetivo é mostrar a sociedade que é possível ter uma linha de maquiagem completa, com qualidade e com preço acessivel.

## 3. Objetivo do projeto

  Por motivos de  vazamento de informações confidenciais durante o processo de desenvolvimento de outra linha,foi decidido que as mensagens  trocadas entre os departamentos e a maquiadora vão ser cifradas ou decifradas,conforme  acordado entre empresa e a maquiadora.

## 4.  Funcionalidade da interface do usuario 

  Conforme necessidade do usuário, é possivel escolher entre as opções cifrar ou decifrar a mensagem digitada na interface. 


## 5. Desenvolvimento do projeto: 

  Foi inicialmente desenvolvido em: 

  - HTML 5 
  - CSS 3
  - JavaScript: Porém dividido entre index.js e cipher.js,onde em index.js foi implementado as funcionalidades dos botões e em cipher.js a função em si tanto para cifragem quanto para decifragem.

## 6. Protótipo 

  Para o desenvolvimento dessa aplicação, foi realizado o protótipo para compreender as necessidades dos usuários, pensando em um layout simples, limpo e objetivo para fácil acesso e utilização do usuário.
  
  Tela Inicial: 

  ![Tela de login](https://github.com/Marcellita/SAP004-cipher/blob/master/src/Utils/inicial.png)

  Tela Sobre o app:

  ![Tela de pedidos](https://github.com/Marcellita/SAP004-cipher/blob/master/src/Utils/sobre.png)

  Tela Mensagem: 

  ![Tela da cozinha](https://github.com/Marcellita/SAP004-cipher/blob/master/src/Utils/mensagem.png)

  Tela Contato:

  ![Paleta de cores](https://github.com/Marcellita/SAP004-cipher/blob/master/src/Utils/contato.png)

## 7. Futuras Alterações: 

  - Melhoria de UX/UI;
  - implementações de opção de caracteres especiais e espaço.

## 8. Considerações técnicas

  Esse projeto pode ser alterado conforme necessidade particular de cada cliente , mas sempre com o objetivo principal: troca de mensagens em total segurança. 
