import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import UI from "./scenes/UI";
import Preload from "./scenes/Preload";
import Camaras from "./scenes/Cameras";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Preload, HelloWorldScene, UI,Camaras, Menu, Game],
};

export default new Phaser.Game(config);
