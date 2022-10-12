import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { controles } from "../scenes/controles.js";
import { creditos } from "../scenes/creditos.js";
import { Play1 } from "../scenes/play1.js";
import { Play2 } from "../scenes/play2.js";
import { Retry } from "../scenes/Retry.js";
import { victoria } from "../scenes/victoria.js";
import { mapa } from "../scenes/mapa.js";




var config = {
  type: Phaser.AUTO,
  width: 1080,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1080,
      height: 720,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Preloads, MainMenu, controles, creditos, mapa, Play1, Play2, Retry, victoria], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
};

var game = new Phaser.Game(config);
