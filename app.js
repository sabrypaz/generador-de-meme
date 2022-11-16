/*++++++++++++++SELECCIONAR EL ASIDE DE TEXTO/IMAGEN CON EL BOTÓN+++++++++++++++++*/


const columnaDeImagen = document.getElementById('columnaDeImagen');
const columnaDeTexto = document.getElementById('columnaDeTexto');
const seccionDeTexto1 = document.getElementById('seccionDeTexto');
const seccionDeImagen1 = document.getElementById('seccionDeImagen');
const botonTexto = document.getElementById('botonTexto');
const botonImagen = document.getElementById('botonImagen'); 

botonTexto.addEventListener('click', () => {
    columnaDeTexto.style.display = 'block'
    columnaDeImagen.style.display = 'none'
});


botonImagen.addEventListener('click', () => {
    columnaDeImagen.style.display = 'block';
    columnaDeTexto.style.display = 'none'
});


/*+++++++++++++++++++INSERTAR TEXTO+++++++++++++++++++*/


const inputTopText = document.getElementById('inputTopText');
const contenedorTopText = document.getElementById('contenedorTopText');

inputTopText.addEventListener('input', (event) => {
 const textoIngresado = event.target.value;
 contenedorTopText.innerHTML = textoIngresado;
});

const inputTextoInferior = document.getElementById('inputTextoInferior');
const contenedorBottomText = document.getElementById('contenedorBottomText');

inputTextoInferior.addEventListener('input', (event) => {
 const textoInferiorIngresado = event.target.value;
 contenedorBottomText.innerHTML = textoInferiorIngresado;
});


/*++++++++++++++++++++++QUITAR TEXTOS+++++++++++++++++++++*/


const contenedorTop = document.getElementById('contenedorTop');
const contenedorBottom = document.getElementById('contenedorBottom')
const sinTextoSuperior = document.getElementById('sinTextoSuperior')
const sinTextoInferior = document.getElementById('sinTextoInferior')
const contenedorImagen = document.getElementById('contenedorImagen')

sinTextoSuperior.addEventListener('input', ()=>{
    if(sinTextoSuperior.checked){
        contenedorTop.style.display = 'none';
        contenedorImagen.style.backgroundSize ='cover';
    }else {
        contenedorTop.style.display = 'block';
    }
});


sinTextoInferior.addEventListener('input', ()=>{
    if(sinTextoInferior.checked){
        contenedorBottom.style.display = 'none';
        contenedorImagen.style.backgroundSize ='cover';
    }else {
        contenedorBottom.style.display = 'block';
    }
});


/*++++++++++++++CAMBIAR COLOR Y FONDO DE TEXTO+++++++++++++*/


const colorTexto = document.getElementById('color');
const fondoTexto = document.getElementById('fondo');
const tamanioDeFuente = document.getElementById('tamanioDeFuente');

colorTexto.addEventListener('input', (event)=>{
    contenedorTopText.style.color = event.target.value;
    contenedorBottomText.style.color = event.target.value;
});

fondoTexto.addEventListener('input', (event)=>{
    contenedorTop.style.backgroundColor = event.target.value;
    contenedorBottom.style.backgroundColor = event.target.value;
});


const checkTransparente = document.getElementById('checkTransparente');

checkTransparente.addEventListener('click', ()=>{
    if(checkTransparente.checked)
    {contenedorTop.classList.add('fondoTransparente');
    contenedorBottom.classList.add('fondoTransparente');
    }else{contenedorTop.classList.remove('fondoTransparente');
    contenedorBottom.classList.remove('fondoTransparente');
    }
});


/*+++++++++++++++FUENTES++++++++++++++++*/


const seleccionDeFuente = document.getElementById('seleccionDeFuente');

seleccionDeFuente.addEventListener('input',()=>{
    contenedorTopText.style.fontFamily = seleccionDeFuente.value;
    contenedorBottomText.style.fontFamily = seleccionDeFuente.value;
})


tamanioDeFuente.addEventListener('input', ()=>{
    contenedorTopText.style.fontSize = `${tamanioDeFuente.value}px`;
    contenedorBottomText.style.fontSize = `${tamanioDeFuente.value}px`;
});


/*+++++++++++ALINEAR TEXTO+++++++*/


const botonAlinearIzquierda = document.getElementById('botonAlinearIzquierda');
const botonCentrar = document.getElementById('botonCentrar');
const botonAlinearDerecha = document.getElementById('botonAlinearDerecha');

botonAlinearIzquierda.addEventListener('click', ()=>{
    contenedorTop.style.textAlign = 'left';
    contenedorBottom.style.textAlign = 'left';
});
botonCentrar.addEventListener('click', ()=>{
    contenedorTop.style.textAlign = 'center';
    contenedorBottom.style.textAlign = 'center';
});
botonAlinearDerecha.addEventListener('click', ()=>{
    contenedorTop.style.textAlign = 'right';
    contenedorBottom.style.textAlign = 'right';
});


/*++++++++++++++CONTORNO DE TEXTO++++++++++++++*/


const btnNoContorno = document.getElementById('btnNoContorno');
const btnContornoClaro = document.getElementById('btnContornoClaro');
const btnContornoOscuro = document.getElementById('btnContornoOscuro');

btnNoContorno.addEventListener('click',()=>{
    contenedorTop.style.textShadow = 'none';
    contenedorBottom.style.textShadow = 'none';
});

btnContornoClaro.addEventListener('click',()=>{
    contenedorTop.style.textShadow = '-1px 0 grey, 0 1px grey , 0 -1px grey';
    contenedorBottom.style.textShadow = '-1px 0 grey, 0 1px grey, 0 -1px grey';
});

btnContornoOscuro.addEventListener('click', ()=>{
    contenedorTop.style.textShadow = '-1px 0 black, 0 1px black , 0 -1px black';
    contenedorBottom.style.textShadow = '-1px 0 black, 0 1px black, 0 -1px black';
});


/*++++++++++++++ESPACIADO DE TEXTO++++++++++++++++*/


const espaciadoDeTexto = document.getElementById('espaciadoDeTexto');

const espaciado = ()=>{
    contenedorTop.style.paddingBottom = `${espaciadoDeTexto.value}px`
    contenedorTop.style.paddingTop = `${espaciadoDeTexto.value}px`
    contenedorBottom.style.paddingTop = `${espaciadoDeTexto.value}px`
    contenedorBottom.style.paddingBottom = `${espaciadoDeTexto.value}px`
}
espaciadoDeTexto.addEventListener('input', espaciado);


/*+++++++++++++++++INTERLINEADO DE TEXTO++++++++++++++++*/


const interlineado = document.getElementById('interlineado');

interlineado.addEventListener('change', ()=>{
    contenedorTop.style.lineHeight = `${interlineado.value}`;
    contenedorBottom.style.lineHeight = `${interlineado.value}`;
});


/*+++++++++++++++++MODO CLARO+++++++++++++++++*/


const botonModo = document.getElementById('botonModo');
const navegacion = document.getElementById('navegacion');
const container = document.getElementById('container');
const seccionDeImagen = document.getElementById('seccionDeImagen');
const seccionDeTexto = document.getElementById('seccionDeTexto');

botonModo.addEventListener('click', (event) => {
    navegacion.classList.toggle('modoClaro');
    container.classList.toggle('modoClaro2');
    seccionDeImagen.classList.toggle('modoClaro1');
    seccionDeTexto.classList.toggle('modoClaro1');
    const tieneModoClaro = navegacion.classList.contains('modoClaro')
    if(tieneModoClaro){
        botonModo.innerHTML = `<i class="fa-solid fa-lightbulb">Modo Oscuro</i>`;
    }else{
        botonModo.innerHTML = `<i class="fa-solid fa-lightbulb">Modo Claro</i>`;
    }
    
});


/*+++++++++++++BOTON CERRAR COLUMNAS++++++++++++++*/



const botonClose = document.getElementById('botonCerrar');  
const columnaTexto2= document.getElementById('columnaDeTexto');
const botonClose2 = document.getElementById('botonCerrar2');
const columnaImagen = document.getElementById('columnaDeImagen');

botonClose.addEventListener('click', (event) =>{
    columnaTexto2.style.display = 'none';
});    

botonClose2.addEventListener('click', () => {
        columnaImagen.style.display = 'none';
});


/*+++++++++++FILTROS DE IMAGEN+++++++++++++*/


const contenedorMeme = document.getElementById('prueba');
const brillo = document.getElementById('brightness');
const opacidad = document.getElementById('opacity');
const contraste = document.getElementById('contrast');
const desenfoque = document.getElementById('blur');
const escalaGrises = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const saturacion = document.getElementById('saturation');
const hue = document.getElementById('hue-rotation');
const negativo = document.getElementById('invert');


function filtros () {
    contenedorMeme.style.filter = `brightness(${brillo.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}%) sepia(${sepia.value}%) invert(${negativo.value}) hue-rotate(${hue.value}deg) saturate(${saturacion.value}%)`; 
    //opacity(${opacidad.value}%)
};



brillo.addEventListener('change', filtros);
opacidad.addEventListener('change', filtros);
contraste.addEventListener('change', filtros);
desenfoque.addEventListener('change', filtros);
escalaGrises.addEventListener('change', filtros);
sepia.addEventListener('change', filtros);
saturacion.addEventListener('change', filtros);
hue.addEventListener('change', filtros);
negativo.addEventListener('change', filtros);



const botonReestablecer = document.getElementById('botonReestablecer');

botonReestablecer.addEventListener('click', ()=>{
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    escalaGrises.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturacion.value = 100;
    negativo.value = 0;
    filtros();
});



/*++++++++++++++FONDO DE IMAGEN++++++++++++++++*/


const colorFondoImagen = document.getElementById('colorFondoImagen');
const menuSelector = document.getElementById('menuSelector');

colorFondoImagen.addEventListener('input', () =>{
const colorDeFondo = colorFondoImagen.value;
    contenedorMeme.style.backgroundColor = colorDeFondo;
});

menuSelector.addEventListener('change',(event)=>{
    contenedorMeme.style.backgroundBlendMode = event.target.value;
})


/*++++++++++++++++++++++++BOTON DE DESCARGA+++++++++++++++++++*/


const btnDescarga = document.getElementById('btnDeDescarga');


btnDescarga.addEventListener('click', () =>
  domtoimage.toBlob(document.getElementById('canvas-meme')).then(blob => 
    saveAs(blob, 'mi-meme.png')))



/*++++++++++++++++++++URL DE IMAGEN++++++++++++++++++++++++*/


const urlDeImagen = document.getElementById('urlDeImagen');

urlDeImagen.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const valueUrl = urlDeImagen.value;
    contenedorMeme.style.backgroundImage = `url("${valueUrl}")`;
    contenedorMeme.style.backgroundPosition = 'cover';
});

