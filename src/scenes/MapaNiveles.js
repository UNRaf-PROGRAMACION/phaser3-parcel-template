// @ts-ignore
import Phaser from "phaser";

export default class MapaNiveles extends Phaser.Scene {
  constructor() {
    super("MapaNiveles");
  }

  nivelActual = 0;
  //imagenes = ["nivel"];

  create() {
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "nivel")
      .setScale(1.1);

    //crear imagen
    // this.add.image(50, 50, this.imagenes[this.nivelActual])
   
    //this.scene.start("juego", { nivel: this.nivelActual });

    // comenzar a jugar
    let juego = this.add.image(500, 950, "siguiente").setScale(0.26);
    juego.setInteractive();
    juego.on("pointerdown", () => this.scene.start("Juego", {nivel: 1}));
    //this.click.play();
  }

  update() {}
}
