//Ator
let yAtor = 366;
let xAtor = 100;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor,30,30);
}

function movimentaAtor(){
    if(yAtor > 2 && keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if(yAtor < 366 && keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
}