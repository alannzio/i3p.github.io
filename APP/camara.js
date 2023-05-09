var video = document.querySelector("#video");
var startButton = document.querySelector("#startButton");
var stopButton = document.querySelector("#stopButton");
var stream, recorder, chunks = [];
var constraints = {audio: true, video: true};
startButton.onclick = function() {
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(s) {
        stream = s;
        video.srcObject = stream;
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = function(e) {
            chunks.push(e.data);
        };
        recorder.start();
    }).catch(function(err) {
        console.log(err.name + ": " + err.message);
    });
}
stopButton.onclick = function() {
    recorder.stop();
    stream.getTracks().forEach(track => track.stop());
    var blob = new Blob(chunks, {type: "video/webm"});
    var formData = new FormData();
    formData.append("video", blob, "video.webm");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "guardar_video.php");
    xhr.send(formData);
    chunks = [];
}
