import Phaser from "phaser";

export default class Enemies extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, velocity) {
    
    super(scene, x, y, texture);
    this.velocityX = velocity;
    
    this.setTexture("Squirrel")
    
   
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.targetX = 0;
    this.targetY = 0;
    this.isFollowing = false;
    
  }
  
  
}