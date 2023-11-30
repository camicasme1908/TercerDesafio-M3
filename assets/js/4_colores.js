// Cambia color al hacer click en los divs
document.getElementById('azul').addEventListener('click', function () {
  this.style.backgroundColor = 'black';
});

document.getElementById('rojo').addEventListener('click', function () {
  this.style.backgroundColor = 'black';
});

document.getElementById('verde').addEventListener('click', function () {
  this.style.backgroundColor = 'black';
});

document.getElementById('amarillo').addEventListener('click', function () {
  this.style.backgroundColor = 'black';
});


let keyDiv = document.getElementById('key');

document.addEventListener('keypress', function (event) {
  let color;
  switch (event.key) {
    case 'a':
      color = 'pink';
      break;
    case 's':
      color = 'orange';
      break;
    case 'd':
      color = 'lightblue';
      break;
    case 'q':
      color = 'purple';
      break;
    case 'w':
      color = 'gray';
      break;
    case 'e':
      color = 'brown';
      break;
    default:
      return;
  }
  keyDiv.style.backgroundColor = color;
});

// Crea nuevo div al presionar q, w o e
document.addEventListener('keypress', function (event) {
  let color;
  switch (event.key) {
    case 'q':
      color = 'purple';
      break;
    case 'w':
      color = 'gray';
      break;
    case 'e':
      color = 'brown';
      break;
    default:
      return; 
  }
  // Crea el nuevo div
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  document.body.appendChild(newDiv);
});
