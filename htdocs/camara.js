    var video = document.getElementById("video");
    var startButton = document.getElementById("startButton");
    var stopButton = document.getElementById("stopButton");
    var mediaRecorder;
    var chunks = [];

    var constraints = {
        audio: true,
        video: {
            facingMode: { exact: "environment" }
        }
    };

    navigator.mediaDevices.getUserMedia(constraints)
        .then(function(stream) {
            video.srcObject = stream;
            mediaRecorder = new MediaRecorder(stream);

            startButton.addEventListener("click", function() {
                mediaRecorder.start();
            });

            stopButton.addEventListener("click", function() {
                mediaRecorder.stop();
            });

            mediaRecorder.ondataavailable = function(event) {
                chunks.push(event.data);
            };
        });

