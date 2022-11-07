// @ts-ignore
import Phaser from 'phaser'


import Preload from "./scenes/Preload";
import MenuPrincipal from './scenes/MenuPrincipal';
import Ajustes from './scenes/Ajustes';
import Creditos from './scenes/Creditos';
import MapaNiveles from './scenes/MapaNiveles';
import Juego from './scenes/Juego';
import Ganaste from "./scenes/Ganaste";
import Perdiste from './scenes/Perdiste';
import Final from './scenes/Final';


const config = {
  type: Phaser.AUTO,
  width: 720,
  height: 1500,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "game",
    width: 720,
    height: 1500,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Preload, MenuPrincipal, Ajustes, Creditos, MapaNiveles, Juego, Ganaste, Perdiste, Final],
};

export default new Phaser.Game(config)