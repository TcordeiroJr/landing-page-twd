
const botoesCarrossel= document.querySelectorAll('.botao');
const imagens =  document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao,indice) =>{
    botao.addEventListener('click',() =>{
        const botaoAtivo = document.querySelector('.botaoAtivo');
        botaoAtivo.classList.remove('botaoAtivo');
        botao.classList.add('botaoAtivo'); 
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        imagens[indice].classList.add('ativa');
    })
} )


 
