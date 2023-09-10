import Phaser from "phaser";

export default class Game extends Phaser.Scene {
    constructor() {
      super("game");
    }

  
    create(){
        this.add.image(300, 240, "room");

        this.player = this.physics.add.sprite(300, 280, "player");
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1);

        this.anims.create({
            key: "turn",
            frames: this.anims.generateFrameNumbers("player", {start: 1, end: 1}),
            frameRate: 20
          });
        
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 0}),
            frameRate: 5,
            repeat: -1,
          });
        
         
          this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player", { start: 2, end: 2 }),
            frameRate: 5,
            repeat: -1,
          });

          this.cursors = this.input.keyboard.createCursorKeys();

          this.cameras.main.startFollow(this.player);


    }

    update(){
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);
            this.player.anims.play("left", true);
          }
          
          else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);
            this.player.anims.play("right", true);
          }
          
          else {
            this.player.setVelocityX(0);
            this.player.anims.play("turn");
          }   
    }
}