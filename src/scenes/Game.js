import Phaser from "phaser";
import events from "./EventCenter";
import Player from "../components/Player";

// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
// import events from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)

export default class Game extends Phaser.Scene {
  life;

  level;

  player;

  constructor() {
    super("game");
  }

  init(data) {
    this.life = data.life || 3;
    this.level = data.level || 1;
  }

  create() {
    console.log("game");

    const map = this.make.tilemap({ key: "map1" });
    const bgLayer = map.addTilesetImage("sky", "cielo");
    map.createLayer("background", bgLayer, 0, 0);
    map.getObjectLayer("objects");
    const spawnPoint = map.findObject("objects", (obj) => obj.name === "player");

    this.player = new Player (
      this,
      spawnPoint.x,
      spawnPoint.y,
      "cat"
    );

    this.scene.launch("ui", {
      life: this.life,
      level: this.level,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
      this.newLevel();
    }
    if (this.cursors.down.isDown) {
      this.scene.start("gameOver", {
      });
    }
    if (this.cursors.up.isDown) {
      this.scene.start("victory");
    }
  }

  newLevel() {
    this.level += 1;
    console.log(this.level);
    events.emit("passLevel", {
      level: this.level,
    });
  }

}
