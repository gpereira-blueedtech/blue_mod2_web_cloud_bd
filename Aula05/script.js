
const imagem1 = document.getElementById('imgform')
const botao1 = document.getElementById('botao')

botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src='img/js.png';
        botao1.value ="estado2";
    }
    else if (botao1.value === "estado2"){
        imagem1.src='img/form.jpg';
        botao1.value ="estado1";
    }
}

function enviaformulario() {
    alert('Formulário enviado!! (brinks, não foi.)')
}

function botao() {
    alert('Esse foi só de teste')
}