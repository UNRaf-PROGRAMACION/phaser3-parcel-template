import Phaser from "phaser";
import events from "./EventCenter";

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

  constructor() {
    super("game");
  }

  init(data) {
    this.life = data.life || 3;
    this.level = data.level || 1;
  }

  create() {
    console.log("game");
    this.scene.launch("ui", {
      life: this.life,
      level: this.level,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.newLevel();
    }
    if (this.cursors.down.isDown) {
      this.scene.start("gameOver");
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
