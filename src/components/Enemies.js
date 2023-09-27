import Phaser from "phaser";
import Player from "../components/Player";
import Hitbox from "../components/Hitbox";

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
    this.enemyHp = 200;
    
  }

  takeDamage(damageAmount) {
    this.enemyHp -= damageAmount;

    if (this.enemyHp <= 0) {
      this.setActive(false).setVisible(false);
    }
  }
  
  
}