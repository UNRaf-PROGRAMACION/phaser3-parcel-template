import Phaser, { Scene } from "phaser";
import Player from "../components/Player";
import EnemiesHitbox from "./EnemiesHitbox";
import Rock from "./Rock";

export default class Enemies extends Phaser.GameObjects.Sprite {
  timer;
  constructor(scene, x, y, texture, velocity, patrolArea) {
    super(scene, x, y, texture);
    this.velocityX = velocity;
    // this.timer = scene.time.addEvent({
    //   delay: 1500, // Adjust as needed
    //   loop: true,
    //   callback: this.patrol,
    //   callbackScope: this,
    // });

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.targetX = 0;
    this.targetY = 0;
    this.enemyHp = 2000;
    this.velocitySquirrel= 300
   

  

}
  takeDamage(damageAmount) {
    if (this.active){
      
      
      this.enemyHp -= damageAmount;
   
      
      

      if (this.enemyHp <= 0) {
       
        this.anims.stop();
        this.setActive(false).setVisible(false);
      }
    }
  }
  
  
}
