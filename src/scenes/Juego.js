import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";
import Ganaste from "./Ganaste";
import Perdiste from "./Perdiste";

import { cartasPorNivel, texturasDeCartas } from "../utilites/cartasPorNivel.js";

export default class Juego extends Phaser.Scene {
  coordenadas;
  numeros;
  nivel;
  constructor() {
    super("Juego");
  }

  init(data) {
    console.log(data);
    this.nivel = data.nivel ?? 1;
  }



  create() {
    // Fondo del nivel
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "bosque",
        "lago",
        "montaña"
      )
      .setScale(1.1);

    this.add.image(400, 100, "temporizador");
    this.add.image(120, 100, "puntos");
    this.puntos = this.add.text(130, 60, "0", {
      fontFamily: "Rockwell",
      fontSize: 70,
      color: "#000000",
    });

    //clic
    //this.clic = this.sound.add("clic");

    // Boton para volver al menu principal
    const menu = this.add.image(600, 100, "boton_menu").setScale(1.1);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    //this.clic.play();

    // Si no junta todas las cartas en 20 segundos --> Game Over
    this.initialTime = 40;
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onSecond,
      callbackScope: this,
      loop: true,
    });
    this.timeText = this.add.text(340, 60, "40", {
      fontFamily: "Rockwell",
      fontSize: 70,
      color: "#000000",
    });

    this.coordenadas = cartasPorNivel[String(this.nivel)].coordenadas;

    console.log(cartasPorNivel[String(this.nivel)]);
    this.numeros = cartasPorNivel[String(this.nivel)].tipos;
    this.numeros = this.numeros.sort(() => (Math.random() > 0.5 ? 1 : -1));

    this.numeros.forEach((numero, index) => {
      let imagen = this.add
        .image(
          this.coordenadas[index][0],
          this.coordenadas[index][1],
          "reverso"
        )
        .setInteractive();
      imagen.tipo = texturasDeCartas[numero];
    });

    //Para ir a la pantalla de ganaste una vez que se dan vuelta todas las cartas
    if (this.coincidencias === 2) {
      this.ganaste();
    }
  }

  update() {
    //si gane ! ver si va a la escena ganaste o queda aca
    events.emit("pasar-nivel");

    if (this.perdiste) {
      return;
    }
  }

  perdiste() {
    this.scene.start("Perdiste");
  }

  ganaste() {
    this.scene.start("Ganaste");
  }

  onSecond() {
    if (!this.perdiste) {
      this.initialTime = this.initialTime - 1; // One second
      this.timeText.setText(this.initialTime);
      if (this.initialTime == 0) {
        this.timedEvent.paused = true;
        this.perdiste();
      }
    }
  }
}
