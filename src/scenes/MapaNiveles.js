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
    console.log("mapa nivel",data.nivel)
    this.nivel = data.nivel  ?? 1;
    this.corazones = data.corazones;
    
    this.fondo_nivel = cartasPorNivel[String(this.nivel)].fondo_nivel;
    this.fondo_mapa = cartasPorNivel[String(this.nivel)].fondo_mapa;
    this.texto = cartasPorNivel[String(this.nivel)].texto;
  }

  create() {

    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, this.fondo_mapa)
      .setScale(1.1);


    // comenzar a jugar
    let juego = this.add.image(this.cameras.main.centerX, 820, "boton_mapa").setScale(0.5);
    this.jugar = this.add.text(215, 800, this.texto, {
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#FCE4CA",
      align: "center",
      //border: 30,
      top: 50,
      left: 50,
    }),
    
    juego.setInteractive();
    juego.on("pointerdown", () => this.scene.start("Juego", {nivel: this.nivel , corazones: this.corazones}));
    //this.click.play();
  

  // Boton para volver al menu principal
  const menu = this.add.image(350, 1000, "boton_menu").setScale(1.0);
  menu.setInteractive();
  menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
  //this.clic.play();

}

  update() {}
}
