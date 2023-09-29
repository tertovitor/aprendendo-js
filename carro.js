//Carro1
let xCarro1 = 600;
let yCarro1 = 40;
let velocidadeCarro1 = 2;

//Carro2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//Carro3
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 3.2;

function mostraCarro(){
  image(imagemCarro, xCarro1, yCarro1,50,40);
  image(imagemCarro2, xCarro2, yCarro2,50,40);
  image(imagemCarro3, xCarro3, yCarro3,50,40);
}
  
function movimentaCarro(){
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  print(xCarro1);
}