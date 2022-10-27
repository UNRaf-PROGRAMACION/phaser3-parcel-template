import Phaser from "phaser";
import { sharedInstance as events } from "./EventCenter";
import Ganaste from "./Ganaste";
import Perdiste from "./Perdiste";

import {
  cartasPorNivel,
  texturasDeCartas,
} from "../utilites/cartasPorNivel.js";
import { Carta } from "../controllers/Carta.js";

export default class Juego extends Phaser.Scene {
  coordenadas;
  numeros;
  nivel;
  puntos;
  coincidenciasNivel;
  coincidencias;
  perdiste;
  cartas = [];
  cartasMezcladas = false;

  constructor() {
    super("Juego");
    this.perdiste = false;
  }

  init(data) {
    //console.log(data);
    this.nivel = data.nivel ?? 1;
    this.corazonesTotal = data.corazones ?? 0;
    this.coincidencias = 0;
  }

  create() {
    //inicializacion de variables
    let tarjeta1 = null;
    let tarjeta2 = null;
    let corazones;
    corazones = this.corazonesTotal;

    let tarjetasDestapadas = 0;

    this.coordenadas = cartasPorNivel[String(this.nivel)].coordenadas;
    this.coincidenciasNivel = cartasPorNivel[String(this.nivel)].coincidencias;
    this.fondo_nivel = cartasPorNivel[String(this.nivel)].fondo_nivel;
    this.tiempo = cartasPorNivel[String(this.nivel)].tiempo;


    // Fondo del nivel
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        this.fondo_nivel
      )
      .setScale(1.1);

    this.add.image(400, 100, "boton_temporizador").setScale(1.0);
    this.add.image(150, 100, "boton_puntos").setScale(1.0);
    this.puntos = this.add.text(150, 70, corazones.toString(), {
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#FCE4CA",
    });

    //clic
    //this.clic = this.sound.add("clic");

    // Boton para volver al menu principal
    const menu = this.add.image(650, 100, "boton_menu").setScale(1.0);
    menu.setInteractive();
    menu.on("pointerdown", () => this.scene.start("MenuPrincipal"));
    //this.clic.play();

    
    this.timedEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onSecond,
      callbackScope: this,
      loop: true,
    });
    this.timeText = this.add.text(390, 70, this.tiempo.toString(), {
      fontFamily: "Rockwell",
      fontSize: 60,
      color: "#FCE4CA",
    });

    

    this.numeros = cartasPorNivel[String(this.nivel)].tipos;
    this.numeros = this.numeros.sort(() => (Math.random() > 0.5 ? 1 : -1));
    let contexto = this;

    this.numeros.forEach((numero, index) => {
      const posx = this.coordenadas[index][0];
      const posy = this.coordenadas[index][1];
      const tipo = texturasDeCartas[numero];
      //console.log(tipo)
      let carta = new Carta(this, posx, posy, tipo);
      this.cartas.push(carta);

      carta.imagen.on("pointerdown", function (pointer) {
        tarjetasDestapadas++;

        if (tarjetasDestapadas <= 2) {
          this.setTexture(this.tipo);
          if (tarjetasDestapadas == 1) {
            tarjeta1 = this;
          }
        }

        if (tarjetasDestapadas == 2) {
          tarjeta2 = this;
          if (tarjeta1.tipo == tarjeta2.tipo) {
            corazones += 1;
            this.escena.puntos.setText(corazones);
            //para hacer que cuando coinciden dos cartas estas desaparezcan de la pantalla
            setTimeout(() => {
              tarjeta1.destroy();
              tarjeta2.destroy();
            }, 500);

            //si se juntan dos parejas de cartas seguidas se suman 5 puntos extra
            //if (tarjetasdestapadas>=4){
            //corazones+= 5;
            //this.escena.puntos.setText(corazones);
            //}

            this.escena.coincidencias++;
            setTimeout(() => {
              tarjetasDestapadas = 0;
            }, 500);
          } else {
            setTimeout(() => {
              tarjeta1.setTexture("reverso");
              tarjeta2.setTexture("reverso");
              tarjetasDestapadas = 0;
              if (contexto.nivel == 3){
                contexto.tiempo -= 2;
                this.timeText.setText(this.tiempo);
              }
            }, 500);
          }
        }

        //Para ir a la pantalla de ganaste una vez que se dan vuelta todas las cartas
        if (this.escena.coincidencias === this.escena.coincidenciasNivel) {
         
          setTimeout(() => {
            console.log(contexto.nivel)
            if (contexto.nivel == 5) {
              this.escena.scene.start("Final", {
                corazones: corazones,
              });
            } else {
              this.escena.scene.start("Ganaste", {
                nivel: this.escena.nivel,
                corazones: corazones,
              });
            }
          }, 1500);
        }
      });
    });
  }

  update() {
    //si gane va a la escena ganaste y luego se pasa al siguiente nivel
    events.emit("pasar-nivel");
    console.log(this.cartasMezcladas);

    //En el nivel 3 si no se encuentran dos cartas iguales, se descuentan 2 segundos del temporizador:
    //if (tarjeta1.tipo != tarjeta2.tipo) {
    //this.tiempo = (this.tiempo -= 2)
    //};


    //En el nivel 4, en el segundo 25 aparece el gato y bloquea un par de cartas al azar, tardan 5 segundos en desbloquearse nuevamente:
    //this.cartasBloqueadas = this.physics.add.staticGroup();
    //this.imagen = escena.add.image(x,y, "carta_bloqueada").setInteractive()
    //numeros8 = numeros8.sort(() => (Math.random() > 0.5 ? 1 : -1));



    //En el nivel 5 aparece la reina a los 25 segundos y vuelve a mezclar las cartas:
    if (this.nivel == 5) {
      if (this.tiempo === 25 && this.cartasMezcladas == false) {
        let indicesMezclados = Array(this.numeros.length)
          .fill(0)
          .map((n, i) => n + i);
        indicesMezclados = indicesMezclados.sort(() =>
          Math.random() > 0.5 ? 1 : -1
        );
        indicesMezclados.forEach((i, index) => {
          this.tweens.add({
            targets: this.cartas[index].imagen,
            x: this.coordenadas[i][0],
            y: this.coordenadas[i][1],
            duration: 1000,
            repeat: 0,
            ease: "Power1",
          });
          console.log(indicesMezclados);
        });
        this.cartasMezcladas = true;
      }
    }
  }


  onSecond() {
    if (!this.perdiste) {
      this.tiempo = this.tiempo - 1; // One second
      this.timeText.setText(this.tiempo);
      if (this.tiempo == 0) {
        this.timedEvent.paused = true;
        this.scene.start("Perdiste", {
          return: this.nivel,
        });
      }
    }
  }
}
