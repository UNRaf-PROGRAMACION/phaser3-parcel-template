import Phaser from "phaser";
// import events from "./EventCenter";

export default class Player extends Phaser.GameObjects.Sprite {
    velocidad;

    body;

    cursor;

    constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCollideWorldBounds(true);
    this.body.setBounce(0.2);


    this.velocidad = 200;
    this.cursor = scene.input.keyboard.createCursorKeys();
  }

  movement() {
    if (this.cursor.left.isDown) {
      this.body.setVelocityX(-this.velocidad);
    } else if (this.cursor.right.isDown) {
      this.body.setVelocityX(this.velocidad);
    } else {
      this.body.setVelocityX(0);
    }

    if (this.cursor.up.isDown && this.body.blocked.down) {
        this.body.setVelocityY(-this.velocidad);
      }
  }
}