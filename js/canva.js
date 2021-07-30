var c = document.getElementById("texto");
var Contxt = c.getContext("2d");
Contxt.font = "bold 40px Tahoma";  
Contxt.fillText("Sasuke en canvas",10,50); 
var imagen = new Image(); // Podemos usar canvas para usarlo con una imagen
imagen.src = 'img/baner.gif'; //con este codigo podemos insertarla desde la ruta 
imagen.onload = function(){ // o podemos poner la imagen en html 
   Contxt.drawImage(imagen, 10, 50); } //para luego usar esta linea de codigo y dibujarla 
