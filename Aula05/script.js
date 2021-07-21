
const imagem1 = document.getElementById('imgform')
const botao1 = document.getElementById('botao')
const p1 = document.getElementById('teste')

botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src='img/js.png';
        botao1.value ="estado2";
        p1.innerHTML = "Novo texto"
    }
    else if (botao1.value === "estado2"){
        imagem1.src='img/form.jpg';
        botao1.value ="estado1";
        p1.innerHTML = "Novo texto"
    }
}

function enviaformulario(){
    p1.innerHTML = "Novo texto"
}