

const botao = document.getElementById("aba-remover-fundo");
const conteudo = document.getElementById("conteudo-remover-fundo");
const imagem = document.getElementById("imagem-remover-fundo");

botao.addEventListener("click", function(){
    conteudo.classList.toggle("hidden")
    imagem.classList.toggle("hidden");

    const abertoConteudo = !conteudo.classList.contains("hidden");
    const abertoImagem = !conteudo.classList.contains("hidden");

    botao.setAttribute("aria-expanded", abertoConteudo);
    botao.setAttribute("aria-expanded", abertoImagem);
})