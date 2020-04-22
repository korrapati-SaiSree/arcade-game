// Enemies our player must avoid
var score = 1000;
var coll = 0;
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that starts the game again and resets the whole board
var btn = document.getElementById("play-again");

// Get the <span> element that closes the modal

//To increase the speed of bugs,speed variable is used
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//When the player collides with bugs he will reach the ground level
Enemy.prototype.update = function(dt) {
  if (this.x < 505) {
    this.x = this.x + this.speed * dt;
  } else {
    this.x = 0;
  }
  if (player.x<this.x+ 75 && player.x+65>this.x && player.y<this.y+60 && player.y+65>this.y) {
    reset();
    coll += 10;
score=1000-coll;



  }


  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  drawScore();
};
//To display the score
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var enemyPosition = [60, 145, 230];
for (var i = 0; i < enemyPosition.length; i++) {
  var enemy = new Enemy(0, enemyPosition[i], (i+1)*100);
  allEnemies.push(enemy);
}
//Player variable is declared
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';

};
Player.prototype.update = function(dt) {

};
//To draw the player on screen
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//to reset the game
function reset() {
  player.x = 200;
  player.y = 400;
};
//To move the player up,right,left,down
Player.prototype.handleInput = function(arguments) {

  switch (arguments) {
    case 'left':
      if (this.x > 0) {
        this.x -= 101;
      }
      break;
    case 'up':
      if (this.y > 0) {

        this.y -= 84;
        if (this.y < 0) {
          setTimeout(()=> {
            reset();
            score = 1000 - coll;
            modal.style.display = "block";
            document.getElementById('winning').textContent = ` Your score is ${score}.`;
            dismissModal();

          }, 500);
        }
      }
      break;
    case 'right':
      if (this.x < 400) {
        this.x += 101;
      }
      break;
    case 'down':
      if (this.y < 400) {
        this.y += 84;
      }
      break;
  }

}
var player = new Player(200, 400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
//removes the modal
function dismissModal() {


  btn.onclick = function() {
    modal.style.display = "none";
  reset();
    score = 1000;
  }

}
