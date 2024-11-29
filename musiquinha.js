let musica;

function preload(){
  musica = loadSound("Gravity.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}