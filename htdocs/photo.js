const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
let width = 640;
let height = 480;

// Acceder a la cámara trasera
navigator.mediaDevices.getUserMedia({video: {facingMode: { exact: "environment" }}, audio: false})
  .then(stream => {
    // Agregar el stream a la etiqueta video
    video.srcObject = stream;
    video.play();
  })
  .catch(error => {
    console.log('Error al acceder a la cámara', error);
  });

// Tomar la foto
snapButton.addEventListener('click', () => {
  // Dibujar el cuadro en el canvas
  canvas.getContext('2d').drawImage(video, 0, 0, width, height);
});
