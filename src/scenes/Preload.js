import Phaser from "phaser";
// // import events from "./EventCenter";

// //Preload
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.spritesheet("C4", "assets/Images/C4.png", {
      frameWidth: 212,
      frameHeight: 200,
      // startFrame: 10
    });
  }

  create() {
    this.anims.create({
      key: "caminataArriba",
      frames: this.anims.generateFrameNumbers("C4", { start: 18, end: 23 }),
      frameRate: 5,
      repeat : -1,
    });

    this.anims.create({
      key: "caminataAbajo",
      frames: this.anims.generateFrameNumbers("C4", { start: 11, end: 16 }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "quietoAbajo",
      frames: [{ key: "C4", frame: 10 }],
      frameRate: 10,
    });
    this.anims.create({
      key: "caminataDerecha",
      frames: this.anims.generateFrameNumbers("C4", { start: 6, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "caminataIzquierda",
      frames: this.anims.generateFrameNumbers("C4", { start: 3, end: 0 }),
      frameRate: 5,
      repeat: -1,
    });

    this.scene.start("City");
  }
}
