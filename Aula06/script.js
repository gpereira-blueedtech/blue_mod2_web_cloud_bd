const botao1 = document.getElementById("botao")
const botao2 = document.getElementById("botao2")
const imagem1 = document.getElementById("logojs")

console.log(botao1)
console.log(imagem1)

botao1.onclick = function() {  
    if(botao1.value === "valor1"){
        alert('Funcionou!!!')
        imagem1.src="img/logo2.png"
        console.log(botao1)
        botao1.value = "valor2"
    }
    else if (botao1.value === "valor2"){
        alert('Funcionou de novo!!!')
        imagem1.src="img/logo2.png"
        console.log(botao1)
        botao1.value="valor1"
    }
}



// Crie um menu com 3 div e em cada uma coloque um botão para cada pedido
// Para cada botao clicado, deve exibir um alerta com a sua escolha
// Adicione um campo de formulário no final com os itens: 
// nome, endereço, e forma de pagamento (escolher entre dinheiro ou cartão)
