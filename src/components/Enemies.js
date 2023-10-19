import Phaser, { Scene } from "phaser";
import Player from "../components/Player";
import EnemiesHitbox from "./EnemiesHitbox";
import Rock from "./Rock";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Enemies extends Phaser.GameObjects.Sprite {
  timer;
  #wasChangedLanguage = TODO;
  constructor(scene, x, y, texture, velocity, patrolArea) {
    super(scene, x, y, texture);
    const { squirrelsKill } = keys.Enemy;
    this.deadSquirrel = squirrelsKill;
    this.squirrelsKill = squirrelsKill;
    this.velocityX = velocity;
   
    
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
    this.targetX = 0;
    this.targetY = 0;
    this.enemyHp = 2000;
    this.velocitySquirrel = 300;
    this.timeToThrowRock = 0;
  }
  create(){
    
    for (const squirrel of this.scene.squirrels) {
      // squirrel.patrol();

      squirrel.targetX = Phaser.Math.Between(20, 2500);
      squirrel.targetY = Phaser.Math.Between(10, 300);
      squirrel.velocity = 300;
    }
    
  }
  update(){
   
      for (const squirrel of this.scene.squirrels) {
       
        const deltaX = squirrel.targetX - squirrel.x;
        const deltaY = squirrel.targetY - squirrel.y;
        const angle = Math.atan2(deltaY, deltaX);
        const speed = squirrel.velocitySquirrel * this.scene.game.loop.delta / 1000;
        const movementX = Math.cos(angle) * speed;
        const movementY = Math.sin(angle) * speed;
    
        // Actualizar las coordenadas de la ardilla
        squirrel.x += movementX;
        squirrel.y += movementY;
    
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Movimiento horizontal
          if (deltaX > 0) {
            squirrel.anims.play("walk-right", true);
          } else {
            squirrel.anims.play("walk-left", true);
          }
        } else {
          // Movimiento vertical
          if (deltaY > 0) {
            squirrel.anims.play("walk-down", true);
          } else {
            squirrel.anims.play("walk-up", true);
          }
    
        if (deltaX * deltaX + deltaY * deltaY < 100) {
          // Si la ardilla está cerca de su objetivo, elige un nuevo objetivo
          squirrel.targetX = Phaser.Math.Between(20, 2500);
          squirrel.targetY = Phaser.Math.Between(10, 300);
        }
      }
    }
    
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
