const canvas = document.getElementById('signatureCanvas');
  const context = canvas.getContext('2d');
  let isDrawing = false;

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function draw(e) {
    if (!isDrawing) return;
    context.lineWidth = 2;
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.offsetX, e.offsetY);
  }

  function stopDrawing() {
    isDrawing = false;
    context.beginPath();
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }