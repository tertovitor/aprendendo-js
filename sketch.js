let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//Carro
let xCarro = 600;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
}

function setup() {
  // put setup code here
  createCanvas(500, 400);
}

function draw() {
  // put drawing code here
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
}

function mostraAtor(){
  image(imagemDoAtor, 100, 366,30,30);
}

function mostraCarro(){
  image(imagemCarro, xCarro,40,50,40);
}

function movimentaCarro(){
  xCarro -= 2;
}
