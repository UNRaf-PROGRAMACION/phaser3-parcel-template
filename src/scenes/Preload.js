import Phaser from "phaser";
// import events from "./EventCenter";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

preload() {
  this.load.image("principal-character", "./public/assets/sprites/background.png");
}

create () {
  this.scene.start("principal-menu");
  }
}
