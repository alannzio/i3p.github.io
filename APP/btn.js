var video = document.getElementById("video");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
  video.play();
  console.log('El video se está reproduciendo');
});

stopButton.addEventListener("click", function() {
  video.pause();
});

video.addEventListener('error', function() {
  console.error('Error al cargar el video');
});
