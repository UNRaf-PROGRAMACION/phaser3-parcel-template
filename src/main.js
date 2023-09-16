import Phaser from "phaser";

// import HelloWorldScene from "./scenes/HelloWorldScene";
// import UI from "./scenes/UI";
import Preload from "./scenes/Preload";
import City from "./scenes/City";


const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 1920,
      height: 1080,
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
  scene: [Preload,City],
};

export default new Phaser.Game(config);
