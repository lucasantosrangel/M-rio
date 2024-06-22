

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function esconderform() {
  form.style.left = "-300px"
  form.style.transform = "translateX(0)"
  mascara.style.visibility = "hidden"
}



  /* Variáveis: 
    Um espaço de memória que você reserva e pode guardar o que quiser la dentro

        3 Jeitos de criar uma variável 

         - var / jeito antigo - não use
         - let
         - const - crie com const porque é uma "constante"*/

/* Funçôes
  Um trecho de código que, só é executado, quando é chamado 
  */