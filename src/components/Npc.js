import Phaser from "phaser";

export default class Npc extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.allowGravity = false;
  }
}
