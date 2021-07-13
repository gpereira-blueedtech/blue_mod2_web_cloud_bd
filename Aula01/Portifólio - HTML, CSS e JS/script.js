let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let btnEnviar = document.getElementById("enviar")
let nomeOk = false
let emailOk = false
let msgOk = false
btnEnviar.disabled = true

nome.addEventListener('keyup', () => {
   if (nome.value.length < 3) {
      nome.style.borderColor = 'red'
      nomeOk = false
   } else {
      nome.style.borderColor = 'green'
      nomeOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

email.addEventListener('keyup', () => {
   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      email.style.borderColor = 'red'
      emailOk = false
   } else {
      email.style.borderColor = 'green'
      emailOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})

mensagem.addEventListener('keyup', () => {
   if (mensagem.value.length > 100) {
      mensagem.style.borderColor = 'red'
      msgOk = false
   } else {
      mensagem.style.borderColor = 'green'
      msgOk = true
   }

   if (nomeOk && emailOk && msgOk) {
      btnEnviar.disabled = false
   } else {
      btnEnviar.disabled = true
   }
})


btnEnviar.addEventListener('click', () => {
   alert('Mensagem enviada com sucesso!')
})

