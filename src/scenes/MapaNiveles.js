// @ts-ignore
import Phaser from "phaser";

import { cartasPorNivel } from "../utilites/cartasPorNivel.js";


export default class MapaNiveles extends Phaser.Scene {
  constructor() {
    super("MapaNiveles");
  }

  nivelActual = 0;
  //imagenes = ["nivel"];
  
  init(data) {
    this.nivel = data.nivel  ?? 1;
    this.corazones = data.corazones;
    
    this.fondo_nivel = cartasPorNivel[String(this.nivel)].fondo_nivel;
    this.fondo_mapa = cartasPorNivel[String(this.nivel)].fondo_mapa;
  }

  create() {

    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, this.fondo_mapa)
      .setScale(1.1);

    //crear imagen
    // this.add.image(50, 50, this.imagenes[this.nivelActual])
   
    //this.scene.start("juego", { nivel: this.nivelActual });

    // comenzar a jugar
    let juego = this.add.image(500, 950, "siguiente").setScale(0.26);
    juego.setInteractive();
    juego.on("pointerdown", () => this.scene.start("Juego", {nivel: this.nivel, corazones: this.corazones}));
    //this.click.play();
  }

  update() {}
}
