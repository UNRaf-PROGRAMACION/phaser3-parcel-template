// @ts-ignore
import Phaser from "phaser";

export default class Creditos extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }


create()
    {
    // Fondo del menú principal
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "pantalla_creditos").setScale(1.1);
    this.add.text(175, 445, 'CREDITOS', {
        fontFamily: "Rockwell",
        fontSize: 70,
        color: "#003333",
      });

    this.emilia = this.add.image ( 250, 500, 'texto').setScale(0.7);
    this.emilia = this.add.text(300, 445, 'EMILIA GÜLL - Programadora / Game Designer',{
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#003333",
    });

    this.agostina = this.add.image ( 450, 500, 'texto').setScale(0.7);
    this.agostina = this.add.text(500, 445, 'AGOSTINA SALGADO - Artista / Game Designer',{
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#003333",
    });

    this.valentina = this.add.image ( 750, 500, 'texto').setScale(0.7);
    this.valentina = this.add.text(800, 445, 'VALENTINA GALVÁN - Artista / Game Designer',{
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#003333",
    });
    

     // Boton para volver al menu principal
     const menu = this.add.image(600, 100, "boton_menu").setScale(1.1);
     menu.setInteractive();
     menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
     //this.clic.play();
}

}

