//Carro
let xCarro = 600;
let yCarro = 40;

function mostraCarro(){
  image(imagemCarro, xCarro, yCarro,50,40);
  image(imagemCarro2, xCarro, yCarro,50,40);
  image(imagemCarro3, xCarro, yCarro,50,40);
}
  
function movimentaCarro(){
  xCarro -= 3;
}