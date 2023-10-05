import Phaser from "phaser";
import Player from "../components/Player";
import EnemiesHitbox from "./EnemiesHitbox";
import Rock from "./Rock";


export default class Enemies extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture,velocity) {
    
    super(scene, x, y, texture );
    this.velocityX = velocity;
    
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.targetX = 0;
    this.targetY = 0;
    this.enemyHp = 200;
    
  }

 

  takeDamage(damageAmount) {
    if (this.active) {
      this.enemyHp -= damageAmount;

      if (this.enemyHp <= 0) {
        this.anims.stop();
        this.setActive(false).setVisible(false);

      }
    }    
  }
  
  }
