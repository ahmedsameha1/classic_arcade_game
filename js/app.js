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
    constructor(player) {
        this.sprite = "images/Gem Green.png";
        this.x = 0;
        this.y = Math.floor((Math.random() * 165) + 60);
        this.speed = Math.floor((Math.random() * 205) + 70);
        this.player = player;
        this.width = 93;
        this.height = 103;
    }
    // Defines the next position of the enemy and check for collision
    update(dt) {
        if (this.x < 505) {
            this.x += (this.speed * dt);
        } else {
            this.x = 0;
            this.y = Math.floor((Math.random() * 165) + 60);
            this.speed = Math.floor((Math.random() * 205) + 70);
        }
        this.check_collision();
    }
    // draw the enemy on canvas
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
    // Check whether a collision happens
    check_collision() {
        const rtx = this.x + 4;
        const rty = this.y + 59;
        const rpx = player.x + 31;
        const rpy = player.y + 57;
        if (rtx < rpx + player.width - 5 &&
            rpx < rtx + this.width - 5 &&
            rty < rpy + player.height - 15 &&
            rpy < rty + this.height - 15) {
            // Reset the game when collision happens
            allEnemies = [new Enemy(), new Enemy(), new Enemy()];
            player = new Player();
        }
    }
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = "images/Key.png";
        this.x = 0;
        this.x = 200;
        this.y = 375;
        this.speed = 20;
        this.width = 41;
        this.height = 83;
    }
    // Do nothing. Just needed by Engine.js
    update() {
    }
    // Handles the key hits of the player
    handleInput(dir) {
        switch (dir) {
            case "up":
                if (this.y - 75 > this.speed) {
                    this.y -= this.speed;
                } else {
                    // The user won the game. Change all entities to stars
                    this.y -= this.speed;
                    this.speed = 0;
                    this.sprite = "images/Star.png";
                    allEnemies.forEach(function (e) {
                        e.sprite = "images/Star.png";
                        e.speed = 0;
                    });
                    // Reset the game after 2 seconds
                    setTimeout(function () {
                        allEnemies = [new Enemy(), new Enemy(), new Enemy()];
                        player = new Player();
                    }, 2000);
                }
                break;
            case "down":
                if (this.y + 89 <= 540 - this.speed) {
                    this.y += this.speed;
                }
                break;
            case "right":
                if (this.x + 100 <= 505 - this.speed) {
                    this.x += this.speed;
                }
                break;
            case "left":
                if (this.x >= this.speed) {
                    this.x -= this.speed;
                }
                break;
        }
    }
    // Draws on canvas
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(), new Enemy(), new Enemy()];

let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});