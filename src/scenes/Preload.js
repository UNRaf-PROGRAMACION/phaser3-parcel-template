import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
      super("preload");
    }
  
   create() {

    this.scene.start("menu");
  }}