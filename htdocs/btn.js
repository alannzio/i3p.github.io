var video = document.getElementById("video");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");

startButton.addEventListener("click", function() {
  video.play();
});

stopButton.addEventListener("click", function() {
  video.pause();
});

video.addEventListener('error', function() {
  console.error('Error al cargar el video');
});