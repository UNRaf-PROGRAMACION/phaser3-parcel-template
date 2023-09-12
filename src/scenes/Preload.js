import Phaser from "phaser";
// import events from "./EventCenter";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

// preload () {

// }

create () {
  this.scene.start("principal-menu");
}
}
