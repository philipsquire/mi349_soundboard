var GulpButton = document.getElementById("Gulp");
var GulpSound = document.getElementById("GulpSoundFile");
var ScreamButton = document.getElementById("Scream");
var ScreamSound = document.getElementById("ScreamSoundFile");
var LaughButton = document.getElementById("Laugh");
var LaughSound = document.getElementById("LaughSoundFile");


GulpButton.addEventListener('click', function () {
    console.log('You pushed the button!');
    GulpSound.play();
  });

ScreamButton.addEventListener('click', function () {
    console.log('You pushed the button!');
    ScreamSound.play();
  });

LaughButton.addEventListener('click', function () {
    console.log('You pushed the button!');
    LaughSound.play();
  });