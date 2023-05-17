<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $target_dir = "C:\Apache24\htdocs\videos";
  $target_file = $target_dir . "/" . basename($_FILES["video"]["name"]);

  if (move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)) {
    echo "El archivo " . htmlspecialchars(basename($_FILES["video"]["name"])) . " ha sido subido.";
  } else {
    echo "Lo siento, hubo un error subiendo tu archivo.";
  }
}
?>