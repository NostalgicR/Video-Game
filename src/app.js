import Phaser from "phaser";
class Game extends Phaser.Scene {
   
    }
    preload() {

        this.load.image("wall", "assets/wallHorizontal.png");
        this.load.image("wall", "assets/wallVertical.png");
    }
    create() {
        this.player = this.physics.add.sprite(0, 0, "player");
        this.player.setCollideWorldBounds(true); 
        this.player.body.gravity.y = 250;
        this.player2 = this.physics.add.sprite(0, 250, "player");
        this.player.setCollideWorldBounds(true);
        this.player2.body.gravity.y = 0;

        this.score = 0;
        this.scoreLabel = this.add.text ("Score: " + this.score, {
        font: "30px",
        fill: "ffffff"
        });
        

        this.enemies = this.physics.add.group();

        this.cursors = this.input.createCursorKeys();
        this.A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.A2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Left);
        this.A3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Right);
        
        this.createWalls();
        
        this.horzMovingWalls = this.physics.add.group();
        this.vertMovingWalls = this.physics.add.group();

        this.horzMovingWalls.create(250, 250, "wall");
        this.horzMovingWalls.body.allowGravity = false;

        this.initialX = 150;
        this.finalX = 450;
        this.horzMovingWallsVelocity = 3;

        this.vertMovingWalls.create(100, 100, "wall");
        this.vertMovingWalls.body.allowGravity = false;

        this.initalY = 150;
        this.finalY = 450;
        this.vertMovingWallsVelocity = 3;

    }
        createWalls(){
         this.walls = this.physics.add.staticGroup();
         this.walls.create(100, 100, "wall");

         

         this.physics.add.collider(this.player, this.walls);
         this.physics.add.collider(this.player, this.horzMovingWalls);
         this.physics.add.collider(this.player, this.vertMovingWalls);
         this.physics.add.collider(this.player2, this.walls);
         this.physics.add.collider(this.player2, this.horzMovingWalls);
         this.physics.add.collider(this.player2, this.vertMovingWalls);


     }
       
        Update(){
        if (this.A.isDown){
        this.player.setVelocityX(-150);
        }
        else if (this.D.isDown) {
            this.player.setVelocityX(150);
        }
        else {
        this.player.setVelocityX(0);
        }

        if (this.A.isDown){
            this.player2.setVelocityX(-150);
        }
        else if (this.D.isDown){
            this.player2.setVelocityX(150);
        }
        else if (this.W.isDown){
            this.player2.setVelocityY(-150);
        }
        else if (this.S.isDown){
            this.player2.setVelocityY(-150);
        }
        else{
        this.player2.setVelocityX(0);
        this.player2.setVelocityY(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-330)
        }
        this.moveWall();   
        }
        moveWall() {
            const oscX = Math.sin(this.time/1000*this.horzMovingWalls);
            const newX = this.initialX + (oscX * (this.initialX-this.finalX));
            
            const oscY = Math.sin(this.time/1000*this.vertMovingWalls);
            const newY = this.initialY + (oscY * (this.initialY-this.finalY));
        }    
    }

    
    
      

  