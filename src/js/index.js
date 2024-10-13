/*
Objetivo - Quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.
Passo 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs;
Passo 2 - Identificar o evento de clique no elemento da listagem;
Passo 3 - Remover a classe aberto só do cartão que tá aberto;
Passo 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir;
Passo 5 - Remover a classe ativo que marca o pokedev selecionado na listagem;
Passo 6 - Adicionar a classe ativo no pokedev selecionado na listagem.
*/

//Passo 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs;
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//Passo 2 - Identificar o evento de clique no elemento da listagem;
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        
//Passo 3 - Remover a classe aberto só do cartão que tá aberto;

const cartaoPokedevAberto = document.querySelector(".aberto");
cartaoPokedevAberto.classList.remove("aberto");
//Passo 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir;
const idPokedevSelecionado = pokedev.attributes.id.value;
const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
console.log(idDoCartaoPokedevParaAbrir)
const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
cartaoPokedevParaAbrir.classList.add("aberto");

//asso 5 - Remover a classe ativo que marca o pokedev selecionado na listagem;
  const pokedevAtivoNaListagem = document.querySelector(".ativo");
  pokedevAtivoNaListagem.classList.remove("ativo");
  //Passo 6 - Adicionar a classe ativo no pokedev selecionado na listagem.
  const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
  pokedevSelecionadoNaListagem.classList.add("ativo");

    })
})
