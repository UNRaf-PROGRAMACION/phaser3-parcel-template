import Phaser from "phaser";

export default class GameOver extends Phaser.Scene {
    constructor() {
      super("gameOver");
    }
  
  create() {
    this.add.text(400, 300, "Game Over");
  }
  
  }