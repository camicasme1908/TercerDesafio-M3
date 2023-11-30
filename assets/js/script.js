
// Modifica la función para que reciba el elemento clickeado de forma de no
// tener que seleccionarlo nuevamente dentro de la función (1 Punto).
// Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
// funcionando en conjunto con el código modificado.

function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);


function pintar(ele) {
    ele.style.backgroundColor = 'yellow';
  }
  ele = document.getElementById("ele1");
  ele.addEventListener("click", function () { pintar(ele) });   


//   Modifica el código anterior para poder pasarle un color como argumento a la
// función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
// párrafo se debe pasar amarillo como color. (1 Punto).

function pintar3(x, color) {
    x.style.backgroundColor = color;
    console.log(color);
  }
  ele3 = document.getElementById("ele");
  pintar3(ele3, 'green');
  ele3.addEventListener("click", function () { pintar3(ele3, 'yellow') });


  
    // Separa el código en 2 archivos: 3 pintar.html y script.js. El script js debe estar dentro de la carpeta assets/js (1
    // Punto). Para obtener el puntaje debes entregar los archivos cumplimiento la estructura pedida en conjunto con los
    // requerimientos de 3.1 y 3.2 

    pintar();
    function pintar(color = 'green'){
                ele1 = document.getElementById("ele4");
                ele1.style.backgroundColor = color;
    }