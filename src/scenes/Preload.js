import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  // escena para optimiozar tiempos
  // carga el preload solo una vez y sirve para todo el juego
  constructor() {
    super("Preload");
  }

  preload() {
    // load assets
    // video
    // rest of immages
    this.load.image("PersonajePrincipal", "./assets/Images/PersonajePrincipal.png");
    this.load.image("Alien", "./assets/Images/Alien.png");
    this.load.image("Alien2", "./assets/Images/Alien2.png");
    this.load.image("fondoMenu", "./assets/Images/fondoMenu.jpeg");
    this.load.image("Logo", "./assets/Images/Logo.jpeg");
    this.load.image("Github", "./assets/Images/Github.png");
    this.load.image("FondoJuego", "./assets/Images/FondoJuego.png");
    this.load.image("Controls", "./assets/Images/Controls.png");
    this.load.image("Donaciones", "./assets/Images/Donaciones.png");
    // Audio
    this.load.audio("selectOption", "./assets/Audio/selectOption.mp3");
  }

  create() {
     this.scene.start("Menu");
  }
}
