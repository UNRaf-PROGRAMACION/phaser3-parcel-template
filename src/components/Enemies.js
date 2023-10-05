import Phaser, { Scene } from "phaser";
import Player from "../components/Player";


export default class Enemies extends Phaser.GameObjects.Sprite {
  timer;
  constructor(scene, x, y, texture ,velocity, patrolArea) {
    
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
    this.isFollowing = false;
    this.enemyHp = 200;
    

    // this.patrolArea = patrolArea;
    
  }

  // patrol() {
  //   if (!this.isFollowing) {
  //     const deltaX = this.targetX - this.x;
  //     const deltaY = this.targetY - this.y;
  
  //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
  //       if (deltaX > 0) {
  //         this.anims.play('walk-right', true);
  //       } else {
  //         this.anims.play('walk-left', true);
  //       }
  //     } else {
  //       if (deltaY > 0) {
  //         this.anims.play('walk-down', true);
  //       } else {
  //         this.anims.play('walk-up', true);
  //       }
  //     }
  
  //     const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  //     const directionX = deltaX / distance;
  //     const directionY = deltaY / distance;
  //     const elapsedTime = this.timer.elapsed;
  //     const patrolDuration = 1500; // Adjust as needed
  
  //     if (elapsedTime < patrolDuration) {
  //       const movementX = directionX * this.velocity * elapsedTime / patrolDuration;
  //       const movementY = directionY * this.velocity * elapsedTime / patrolDuration;
  
  //       this.x += movementX;
  //       this.y += movementY;
  //     } else {
  //       // Time to pick a new patrol target
  //       const randomX = Phaser.Math.Between(this.patrolArea.left, this.patrolArea.right);
  //       const randomY = Phaser.Math.Between(this.patrolArea.top, this.patrolArea.bottom);
  //       this.targetX = randomX;
  //       this.targetY = randomY;
  //     }
  //   }
  // }

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