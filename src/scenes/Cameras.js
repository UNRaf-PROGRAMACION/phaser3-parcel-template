import Phaser from "phaser";

export default class Cameras extends Phaser.Scene {
    constructor() {
      super("camaras");
      this.camerasV = []

      /* cuando se abra la escena cameras el player debe ser seteado inamovible
      de esta manera se parasán las camaras con las mismas flechas de movimiento
      cameras = array de arrays [[,,,,,], [,,,,,], [,,,,,]]
      el cambio de camras  se podria hacer con una maquina de estados
      usa swich para los diferente casos.
      */
    }




    create() {

      this.add.image(320, 240, "cameras");
    }
}