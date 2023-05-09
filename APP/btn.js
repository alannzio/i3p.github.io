var video = document.getElementById("video");
var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {
  video.play();
});

video.addEventListener('error', function() {
  console.error('Error al cargar el video');
});
