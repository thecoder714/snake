var canvas = new fabric.Canvas("game_canvas");
playerx = 500;
playery = 500;
player = "";
movementValue = 50;
var apple = "";
var applex = "";
var appley = "";

function init() {
  genApple();
  playerUpdate(); 
}

function playerUpdate() {
  fabric.Image.fromURL("snake.png", function (Img) {
    player = Img;
    player.scaleToHeight(150);
    player.scaleToWidth(100);
    player.set({
      top: playery,
      left: playerx,
    });
    canvas.add(player);
  });
}

function appleUpdate() {
  fabric.Image.fromURL("apple.png", function (Img) {
    apple = Img;
    apple.scaleToHeight(150);
    apple.scaleToWidth(100);
    apple.set({
      top: appley,
      left: applex
    });
    canvas.add(apple);
  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  //movement

  if (keyPressed == "38") {
    up();
  }
  if (keyPressed == "40") {
    down();
  }
  if (keyPressed == "37") {
    left();
  }
  if (keyPressed == "39") {
    right();
  }

  if (applex == playerx && appley == playery) {
    canvas.remove(player);
    canvas.remove(apple);
    genApple();
  }
}

//movement

function up() {
  if (playery >= 50) {
    playery -= movementValue;
    canvas.remove(player);
    playerUpdate();
  }
}

function down() {
  if (playery <= 600) {
    playery += movementValue;
    canvas.remove(player);
    playerUpdate();
  }
}

function left() {
  if (playerx >= 50) {
    playerx -= movementValue;
    canvas.remove(player);
    playerUpdate();
  }
}

function right() {
  if (playerx <= 1100) {
    playerx += movementValue;
    canvas.remove(player);
    playerUpdate();
  }
}

//apples

function genApple() {
  var xvalues = [
    50, 100, 150, 200, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
    900, 950, 1000,
  ];
  var yvalues = [50, 100, 150, 200, 350, 400, 450, 500, 550, 600];

  applex = xvalues[Math.floor(Math.random() * xvalues.length)];
  appley = yvalues[Math.floor(Math.random() * yvalues.length)];
  appleUpdate();
}
