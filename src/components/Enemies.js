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
  takeDamage(damageAmount) {
    if (this.active) {
      this.enemyHp -= damageAmount;

      if (this.enemyHp <= 0) {
        console.log("Ardilla morida");
        this.scene.squirrelsKilled++;
        this.scene.squirrelsKilledText.setText(
        `Squirrelds Killed: ${this.scene.squirrelsKilled} /4`
      );
        
        this.setActive(false).setVisible(false);
      }
    }
  }
}
