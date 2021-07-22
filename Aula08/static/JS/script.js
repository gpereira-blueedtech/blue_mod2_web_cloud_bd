const itens = document.querySelectorAll('.itens')

itens.forEach((item)=>{
    item.addEventListener('click', () => {
        item.style.textDecoration = 'line-through'
    })

})