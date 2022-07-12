/*const botonReestablecer = document.getElementById(botonReestablecer)

botonReestablecer.addEventListener('click', (e) => {
    if(botonReestablecer === true)
    return{reset 
    }
})
*/


/*++++++++++++++SELECCIONAR EL ASIDE DE TEXTO/IMAGEN CON EL BOTÓN+++++++++++++++++*/


const columnaDeImagen = document.getElementById('columnaDeImagen');
const columnaDeTexto = document.getElementById('columnaDeTexto');
const seccionDeTexto1 = document.getElementById('seccionDeTexto');
const seccionDeImagen1 = document.getElementById('seccionDeImagen');
const botonTexto = document.getElementById('botonTexto');
const botonImagen = document.getElementById('botonImagen'); 

botonTexto.addEventListener('click', () => {
    columnaDeTexto.style.display = 'block';
    columnaDeTexto.classList.remove ='display-none';
    columnaDeImagen.classList.add ='display-none';
    
});
botonImagen.addEventListener('click', () => {
    columnaDeImagen.style.display = 'block';
    columnaDeImagen.classList.remove ='display-none';
    columnaDeTexto.classList.add = 'display-none';
    
});









/*+++++++++++++++++++INSERTAR TEXTO+++++++++++++++++++*/


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

const contenedorTopText1 = document.getElementById('contenedorTopText');//letra
const contenedorTop1 = document.getElementById('contenedorTop');//caja
const contenedorBottom1 = document.getElementById('contenedorBottom');//caja
const contenedorBottomText1 =document.getElementById('contenedorBottomText')//letra
const tamanioDeFuente = document.getElementById('tamanioDeFuente');

colorTexto.addEventListener('input', (event)=>{
    contenedorTopText1.style.color = event.target.value;
    contenedorBottomText1.style.color = event.target.value;
})

fondoTexto.addEventListener('input', (event)=>{
    contenedorTop1.style.backgroundColor = event.target.value;
    contenedorBottom1.style.backgroundColor = event.target.value;
})

const checkTransparente = document.getElementById('checkTransparente');

checkTransparente.addEventListener('click', ()=>{
    if(checkTransparente.checked)
    {contenedorTop1.classList.add('fondoTransparente') ;
    contenedorBottom1.classList.add('fondoTransparente');
    }else{contenedorTop1.classList.remove('fondoTransparente');
    contenedorBottom1.classList.remove('fondoTransparente');
    }
});


/*+++++++++++++++FUENTES++++++++++++++++*/


const seleccionDeFuente = document.getElementById('seleccionDeFuente');

seleccionDeFuente.addEventListener('input',()=>{
    contenedorTopText1.style.fontFamily = seleccionDeFuente.value;
    contenedorBottomText1.style.fontFamily = seleccionDeFuente.value;
})


tamanioDeFuente.addEventListener('input', ()=>{
    contenedorTopText1.style.fontSize = `${tamanioDeFuente.value}px`;
    contenedorBottomText1.style.fontSize = `${tamanioDeFuente.value}px`;
});

/*+++++++++++ALINEAR TEXTO+++++++*/


const botonAlinearIzquierda = document.getElementById('botonAlinearIzquierda');
const botonCentrar = document.getElementById('botonCentrar');
const botonAlinearDerecha = document.getElementById('botonAlinearDerecha');

botonAlinearIzquierda.addEventListener('click', ()=>{
    contenedorTop1.style.textAlign = 'left';
    contenedorBottom1.style.textAlign = 'left';
});
botonCentrar.addEventListener('click', ()=>{
    contenedorTop1.style.textAlign = 'center';
    contenedorBottom1.style.textAlign = 'center';
});
botonAlinearDerecha.addEventListener('click', ()=>{
    contenedorTop1.style.textAlign = 'right';
    contenedorBottom1.style.textAlign = 'right';
});


/*++++++++++++++CONTORNO DE TEXTO++++++++++++++*/
const btnNoContorno = document.getElementById('btnNoContorno');
const btnContornoClaro = document.getElementById('btnContornoClaro');
const btnContornoOscuro = document.getElementById('btnContornoOscuro');

btnNoContorno.addEventListener('click',()=>{
    contenedorTop1.style.textShadow = 'none';
    contenedorBottom1.style.textShadow = 'none';
});

btnContornoClaro.addEventListener('click',()=>{
    contenedorTop1.style.textShadow = '-1px 0 grey, 0 1px grey , 0 -1px grey';
    contenedorBottom1.style.textShadow = '-1px 0 grey, 0 1px grey, 0 -1px grey';
});

btnContornoOscuro.addEventListener('click', ()=>{
    contenedorTop1.style.textShadow = '-1px 0 black, 0 1px black , 0 -1px black';
    contenedorBottom1.style.textShadow = '-1px 0 black, 0 1px black, 0 -1px black';
});


/*++++++++++++++ESPACIADO DE TEXTO++++++++++++++++*/


const espaciadoDeTexto = document.getElementById('espaciadoDeTexto');

const espaciado = ()=>{
    contenedorTop1.style.paddingBottom = `${espaciadoDeTexto.value}px`
    contenedorTop1.style.paddingTop = `${espaciadoDeTexto.value}px`
    contenedorBottom1.style.paddingTop = `${espaciadoDeTexto.value}px`
    contenedorBottom1.style.paddingBottom = `${espaciadoDeTexto.value}px`
}
espaciadoDeTexto.addEventListener('input', espaciado);


/*+++++++++++++++++INTERLINEADO DE TEXTO++++++++++++++++*/

const interlineado = document.getElementById('interlineado');

interlineado.addEventListener('change', ()=>{
    contenedorTop1.style.lineHeight = `${interlineado.value}`;
    contenedorBottom1.style.lineHeight = `${interlineado.value}`;
})


/*+++++++++MODO OSCURO+++++++++++++*/


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

const contenedorMeme = document.getElementById('contenedorImagen');
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
    contenedorMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}%) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaGrises.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturacion.value}%) invert(${negativo.value}))`;

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
})



    
 

/*++++++++++++++FONDO DE IMAGEN++++++++++++++++*/


const colorFondoImagen = document.getElementById('colorFondoImagen');
const menuSelector = document.getElementById('menuSelector');

colorFondoImagen.addEventListener('input', () =>{
    const valorDeFondo = colorFondoImagen.value;
    contenedorImagen.style.backgroundColor = valorDeFondo;
});

menuSelector.addEventListener('change',()=>{
    contenedorImagen.style.backgroundBlendMode = menuSelector.value;
})


/*++++++++++++++++++++++++BOTON DE DESCARGA+++++++++++++++++++*/


const btnDescarga = document.getElementById('btnDeDescarga');


btnDescarga.addEventListener('click', () =>
  domtoimage.toBlob(document.getElementById('canvas-meme')).then(blob => 
    saveAs(blob, 'mi-meme.png')))



/*++++++++++++++++++++URL DE IMAGEN++++++++++++++++++++++++*/


const urlDeImagen = document.getElementById('urlDeImagen');
const contenedorImagen1= document.getElementById('contenedorImagen')

urlDeImagen.addEventListener('keyup', (e)=>{
    e.preventDefault();
    const valueUrl = urlDeImagen.value;
    contenedorImagen1.style.backgroundImage = `url("${valueUrl}")`;
    contenedorImagen1.style.backgroundPosition = 'center';
});

