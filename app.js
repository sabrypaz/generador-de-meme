/*const botonReestablecer = document.getElementById(botonReestablecer)

botonReestablecer.addEventListener('click', (e) => {
    if(botonReestablecer === true)
    return{reset 
    }
})


const img = document.createElement('img');
img.setAttribute('src', 'url');*/

/*+++++++++INSERTAR TEXTO++++++++*/

const inputTopText = document.getElementById('inputTopText');
const contenedorTopText = document.getElementById('contenedorTopText');

inputTopText.addEventListener('input', (event) => {
 const textoIngresado = event.target.value;
 contenedorTopText.innerHTML = textoIngresado;
})

const inputTextoInferior = document.getElementById('inputTextoInferior');
const contenedorBottomText = document.getElementById('contenedorBottomText');

inputTextoInferior.addEventListener('input', (event) => {
 const textoInferiorIngresado = event.target.value;
 contenedorBottomText.innerHTML = textoInferiorIngresado;
});

/*+++++++++MODO OSCURO+++++++++++++*/


const botonModo = document.getElementById('botonModo');
const navegacion = document.getElementById('navegacion');

botonModo.addEventListener('click', () => {
    navegacion.classList.toggle('modoClaro');
});

/*++++++++++++++SELECCIONAR EL ASIDE DE TEXTO CON EL BOTÓN+++++++++++++++++*/
const seccionDeTexto = document.getElementById('seccionDeTexto');
const seccionDeImagen = document.getElementById('seccionDeImagen');
const botonTexto = document.getElementById('botonTexto');

botonTexto.addEventListener('click', () => {
    seccionDeImagen.style.display = 'none';
    seccionDeTexto.style.display = 'block';
});

botonImagen.addEventListener('click', () => {
    seccionDeImagen.style.display = 'block';
    seccionDeTexto.style.display = 'none';
});
 
/*+++++++++++FILTROS DE IMAGEN+++++++++++++*/
const filter = () => {
    img.style.filter = `
    brightness(${pointsBrillo.value}) 
    opacity(${pointsOpacidad.value}) 
    contrast(${pointsContraste.value}%) 
    blur(${pointsDesenfoque.value}px) 
    grayscale(${pointsGrises.value}%) 
    sepia(${pointsSepia.value}%) 
    hue-rotate(${pointsHue.value}deg) 
    saturate(${pointsSaturado.value}%) 
    invert(${pointsNegativo.value})`;
  };

