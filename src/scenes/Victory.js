import Phaser from "phaser";

export default class Vcitory extends Phaser.Scene {
    constructor() {
      super("victory");
    }
  
  create() {
    this.add.text(400, 300, "Victory");
  }
  
  }