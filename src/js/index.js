import Phaser from 'phaser'
import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Creditos } from "../scenes/creditos.js";
import { Play } from "../scenes/play.js";
import { Ayuda } from "../scenes/ayuda.js";
import { Opcion } from "../scenes/opcion.js";

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 960,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1024,
      height: 576,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [Preloads, MainMenu, Creditos, Play, Opcion, Ayuda], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
};

export default new Phaser.Game(config);
