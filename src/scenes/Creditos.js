// @ts-ignore
import Phaser from "phaser";

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  create() {
    if (!this.scale.isFullscreen) {
      this.scale.startFullscreen();
    }

    // Fondo del menú principal
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "pantalla_creditos"
      )
      .setScale(1.1);
    this.add.text(150, 270, "CREDITOS", {
      fontFamily: "Rockwell",
      fontSize: "90px",
      align: "center",
      color: "#FCE4CA",
    });

    this.emilia = this.add.image(455, 650, "texto").setScale(0.7);
    this.emilia = this.add.text(
      320,
      600,
      "EMILIA GÜLL \n \nProgramadora \nGame Designer",
      {
        fontFamily: "Rockwell",
        fontSize: "25px",
        color: "#FCE4CA",
      }
    );

    this.agostina = this.add.image(455, 850, "texto").setScale(0.7);
    this.agostina = this.add.text(
      320,
      800,
      "VALENTINA GALVAN \n \nArtista \nGame Designer",
      {
        fontFamily: "Rockwell",
        fontSize: "25px",
        color: "#FCE4CA",
      }
    );

    this.valentina = this.add.image(455, 1050, "texto").setScale(0.7);
    this.valentina = this.add.text(
      320,
      1000,
      "AGOSTINA SALGADO \n \nArtista \nGame Designer",
      {
        fontFamily: "Rockwell",
        fontSize: "25px",
        color: "#FCE4CA",
      }
    );

    // Boton para volver al menu principal
    const menu = this.add.image(650, 1400, "boton_menu").setScale(1.1);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    //this.clic.play();
  }
}
