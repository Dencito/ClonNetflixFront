const labelBuscador = document.getElementById('labelBuscador')
labelBuscador.addEventListener('click',()=>{
    document.getElementById('buscador').style.display = 'block'
    labelBuscador.style.position = 'absolute';
    labelBuscador.style.top = '5px';
    labelBuscador.style.left = '5px'
})

