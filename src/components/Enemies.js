import Phaser, { Scene } from "phaser";
import Player from "../components/Player";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Enemies extends Phaser.GameObjects.Sprite {
  timer;
  #wasChangedLanguage = TODO;
  constructor(scene, x, y, texture, velocity) {
    super(scene, x, y, texture);
    const { squirrelsKill } = keys.Enemy;
    this.deadSquirrel = squirrelsKill;
    this.squirrelsKill = squirrelsKill;
  
    
     this.timer = scene.time.addEvent({
     delay: 1500, // Adjust as needed
       loop: true,
       callback: this.patrol,
      callbackScope: this,
     });

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
    this.velocity = velocity;
    this.targetX = 1200;
    this.targetY = 2700;
    this.enemyHp = 2000;
    this.velocitySquirrel = 300;
    this.timeToThrowRock = 0;

    this.patrolling = true;
  }
  
  update(){
    if (this.patrolling) {
      const distanceX = this.targetX - this.x;
      const distanceY = this.targetY - this.y;

      // Calculate the angle to the target position
      const angle = Math.atan2(distanceY, distanceX);

      // Calculate the velocity components based on the angle and velocitySquirrel
      const velocityX = Math.cos(angle) * this.velocitySquirrel;
      const velocityY = Math.sin(angle) * this.velocitySquirrel;

      // Set the squirrel's velocity
      this.body.setVelocity(velocityX, velocityY);

      // Determine which direction the squirrel is moving and set the appropriate animation
      if (Math.abs(velocityX) > Math.abs(velocityY)) {
        if (velocityX > 0) {
          this.anims.play("squirrelRight", true);
        } else {
          this.anims.play("squirrelLeft", true);
        }
      } else {
        if (velocityY > 0) {
          this.anims.play("squirrelDown", true);
        } else {
          this.anims.play("squirrelUp", true);
        }
      }

      // Check if the squirrel has reached its target position
      const distanceToTarget = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.targetX,
        this.targetY
      );

      if (distanceToTarget < 5) {
        // Set a new random target position within the area
        this.targetX = Phaser.Math.Between(1000, 2450);
        this.targetY = Phaser.Math.Between(2000, 3150);
      }
    }
  }

  // Add a new method to stop the squirrel's movement
  stopMovement() {
    this.patrolling = false;
    this.body.setVelocity(0, 0);
  }

  // Add a new method to resume the squirrel's movement
  resumeMovement() {
    this.patrolling = true;
  }


  takeDamage(damageAmount) {
    if (this.active) {
      this.enemyHp -= damageAmount;

      if (this.enemyHp <= 0) {
        console.log("Ardilla morida");
        this.scene.squirrelsKilled++;
        this.scene.squirrelsKilledText.setText(
        `${getPhrase(this.deadSquirrel)}: ${this.scene.squirrelsKilled} /4`
      );
        
        this.setActive(false).setVisible(false);
        
      }
    }
  }
}
