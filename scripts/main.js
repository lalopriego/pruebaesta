/* const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Que pedo maricom!';

document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
} */

function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }

  let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/pa_calicholo.jpg') {
      miImage.setAttribute('src','images/pa_dripsg.jpg');
    } else {
      miImage.setAttribute('src', 'images/pa_calicholo.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}