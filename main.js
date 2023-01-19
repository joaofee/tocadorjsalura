/* // usei o document.querySelector para selecionar o botão no html para incluir um codigo js
// (usei o '.' pois é uma classe aonde vou querer mexer);

document.querySelector('.tecla_pom').onclick = tocaSomPom;
document.querySelector('.tecla_clap').onclick = tocaSomClap;


// criado uma função para armazenar o toca play, para chamarmos essa função no navegador
// o navegador só permite o som após interação do usuário



function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
 */

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio)
  
  if (elemento != null && elemento.localName === 'audio') {

         elemento.play();
        }
  else {
    console.log("elemento não encontrado ou seletor inválido")
  }
    
}

// começaremos trabalhar com listas, usando uma constante para armazenar nosso comando de listas de teclas


const listaDeTeclas = document.querySelectorAll('.tecla'); 


// usando o while dando um valor ao contador para ser reproduzido na lista
// usei a listadeteclas.length pois já conta automaticamente o tamanho da array
// na linha das listadeteclas foi preciso atribuir uma função anonima no on click para o navegador nao reproduzir sem interação e dar erro
// 


for(let contador = 0 ; contador < listaDeTeclas.length; contador++){

  //const tecla para armazenar e não ter repetição de codigo 
   const tecla = listaDeTeclas[contador]
  //
   const instrumento = tecla.classList[1]
   
   const idAudio = `#som_${instrumento}`
   
   listaDeTeclas[contador].onclick = function() {
        tocaSom(idAudio)
    };
// colocando o evento na função no onleydown conseguimos ver no console o botão q foi apertado
    tecla.onkeydown = function (evento) {
        if(evento.code === 'Enter' || evento.code === 'Space'){
        tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
  
}

function enterAtiva () {
    listaDeTeclas[2].classList.add('ativa');
}