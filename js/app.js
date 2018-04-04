// Enemies our player must avoid
/* var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};*/
class Enemy {
    constructor() {
        this.sprite = "images/Rock.png";
        this.x = 0;
        this.y = Math.floor((Math.random() * 165) + 60);
        //this.y = 225;
        console.log(this.y);
        this.speed = Math.floor((Math.random() * 205) + 70);
    }

    update(dt) {
        this.x += (this.speed * dt);
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = "images/Heart.png";
        this.x = 0;
        this.x = 200;
        this.y = 375;
        this.speed = 20;
    }

    update() {
    }

    handleInput(dir) {
        switch(dir) {
            case "up":
                if ( this.y - 75 > this.speed ) {
                    this.y -= this.speed;
            } else {
                    this.y -= this.speed;
                console.log("won!!");
            }
                break;
            case "down":
                if ( this.y + 89 <= 540 - this.speed ) {
                    this.y += this.speed;
            }
                break;
            case "right":
                if ( this.x + 100 <= 505 - this.speed ) {
                    this.x += this.speed;
            }
                break;
            case "left":
                if ( this.x >= this.speed ) {
                    this.x -= this.speed;
            }
                break;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [
                        new Enemy(),
                        new Enemy(),
                        new Enemy()
                   ];

const player = new Player();


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
