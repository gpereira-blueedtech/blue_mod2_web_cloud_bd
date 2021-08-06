setTimeout(() => {
    document.querySelector('#msg').style.display = 'none'
}, 3000)

const btnCriar = document.querySelector('#btn-criar')
const btnListar = document.querySelector('#btn-listar')

btnCriar.addEventListener('click', () => {
    document.querySelector('#new').style.display = 'flex'
    document.querySelector('#lista').style.display = 'none'
})

btnListar.addEventListener('click', () => {
    document.querySelector('#new').style.display = 'none'
    document.querySelector('#lista').style.display = 'flex'
})