import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, velocity) {
    super(scene, x, y, texture);
    this.setTexture("C4");
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.cursor= scene.input.keyboard.createCursorKeys()
  }
  
  update(){
    if(this.cursor.left.isDown){
        this.body.setVelocityX (-this.velocity)
    }else if (this.cursor.right.isDown){
        this.body.setVelocityX (this.velocity)
    }else {
        this.body.setVelocityX (0)
    }
  }
}
