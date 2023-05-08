import cv2
import pytesseract

# Inicializar la cámara
cap = cv2.VideoCapture(0)

# Configurar el reconocimiento óptico de caracteres (OCR)
pytesseract.pytesseract.tesseract_cmd = r'"C:\Users\alans\OneDrive\Documentos"'

while True:
    # Leer la imagen desde la cámara
    ret, img = cap.read()

    # Convertir la imagen a escala de grises
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Aplicar un filtro de suavizado para reducir el ruido en la imagen
    gray = cv2.medianBlur(gray, 3)

    # Aplicar el reconocimiento óptico de caracteres a la imagen
    text = pytesseract.image_to_string(gray, lang='eng')

    # Escribir el texto en un archivo de texto
    with open('texto.txt', 'w') as f:
        f.write(text)

    # Mostrar la imagen y el texto
    cv2.imshow('img', img)
    cv2.imshow('gray', gray)

    # Salir del bucle si se presiona la tecla 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Liberar la cámara y cerrar las ventanas de visualización
cap.release()
cv2.destroyAllWindows()
