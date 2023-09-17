import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
      super("preload");
    }

    preload() {
      this.load.tilemapTiledJSON("map1", "./assets/tilemaps/level1.json");
      this.load.image("cielo", "./assets/images/sky_atlas.png");
      this.load.image("cat", "./assets/images/gato2.png");
    }
  
   create() {
    this.scene.start("menu");
  }}