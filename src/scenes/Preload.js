import Phaser from "phaser";
// // import events from "./EventCenter";

// //Preload
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("menuBg", "assets/images/menuBg.jpg");
    this.load.image("title", "assets/images/title.png");
    this.load.spritesheet("Squirrel","assets/images/Squirrel.png",{
      frameWidth: 221,
      frameHeight: 169,
    });

    this.load.spritesheet("C4", "assets/Images/C4.png", {
      frameWidth: 212,
      frameHeight: 200,
      // startFrame: 10
    });

    this.load.spritesheet("C4Attack", "assets/Images/C4Attack.png", {
      frameWidth: 321,
      frameHeight: 200,
      // startFrame: 10
    });
    this.load.tilemapTiledJSON("City","assets/Tilemaps/City.json");
    this.load.image("Mapcity","assets/Images/tileset.png");
  }

  create() {
    this.anims.create({
      key: "walkingUp",
      frames: this.anims.generateFrameNumbers("C4", { start: 18, end: 23 }),
      frameRate: 5,
      repeat : -1,
    });

    this.anims.create({
      key: "upStop",
      frames: [{ key: "C4", frame: 17 }],
      frameRate: 1,
    });

    this.anims.create({
      key: "walkingDown",
      frames: this.anims.generateFrameNumbers("C4", { start: 11, end: 16 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "downStop",
      frames: [{ key: "C4", frame: 10 }],
      frameRate: 10,
    });

    this.anims.create({
      key: "walkingRight",
      frames: this.anims.generateFrameNumbers("C4", { start: 6, end: 9 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "rightStop",
      frames: [{ key: "C4", frame: 5 }],
      frameRate: 1,
    });

    this.anims.create({
      key: "walkingLeft",
      frames: this.anims.generateFrameNumbers("C4", { start: 3, end: 0 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "leftStop",
      frames: [{ key: "C4", frame: 4 }],
      frameRate: 1,
    });

    this.anims.create({
      key: "AttackRight",
      frames: this.anims.generateFrameNumbers("C4Attack", { start: 0, end: 1 }),
      frameRate: 1,
      repeat : 0,
    });

    this.scene.start("MainMenu");
  }
}
