//criar matriz
var notas =[70,20,56,45,96];
function soma(params) {
  var somatorio = 0;
  for( var i = 0; i<notas.length; i++){
    somatorio = somatorio + notas[i];
  }
}

function setup() 
{
  createCanvas(400,400);
  //usar loop for para percorrer a matriz
  
}
function draw() 
{
  background(30);
}

