import Phaser from "phaser";
class game extends Phaser.Scene {
    constructor() {

    }
    preload() {
        this.load
    }
    create() {
        this.player.physics.add.sprite(0, 0, "player");
        this.player2.physics.add.sprite(0, 250, "player");
        this.player.body.gravity

        this.scoreLabel = this.text("Score: " + score);
        this.score = 0;

        this.enemies.physics.add.group();

        this.cursors = this.input.createCursorKeys();
        
    }

    createWalls(){
        
    }
}   