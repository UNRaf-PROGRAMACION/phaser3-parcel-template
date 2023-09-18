import Phaser from "phaser";

export default class Cameras extends Phaser.Scene {
    constructor(scene) {
      super("camaras");
      this.camerasV = []
      scene.add.existing(this);

      /* cuando se abra la escena cameras el player debe ser seteado inamovible
      de esta manera se parasán las camaras con las mismas flechas de movimiento
      cameras = array de arrays [[,,,,,], [,,,,,], [,,,,,]]
      el cambio de camras  se podria hacer con una maquina de estados
      usa swich para los diferente casos.
      */
      this.cursors = scene.input.keyboard.createCursorKeys();
    }




    create() {

      this.add.image(320, 240, "bcamera1");
      this.add.image(200, 400, "closeCameras").setInteractive()  .on("pointerdown", () => this.scene.switch("game"));
    }



    /* update() {
      if (this.input.keyboard.on('keydown-ONE', listener )) {
        this.add.image(320, 240, "camera1")
      }
    } */
}