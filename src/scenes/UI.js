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

export default class UI extends Phaser.Scene {
  constructor() {
    super("UI");
  }
  init(data) {
    this.hp = data.hp || 200
    this.lvl = data.lvl || 1
  }

  create() {
    this.hpTexto = this.add.text(50, 60, `HP ${this.hp}`, {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
    events.on("UpdateHP", this.UpdateHP, this);
    events.on("UpdateLVL", this.UpdateLVL, this);
    this.levelText = this.add.text(50, 150, `LVL ${this.lvl}`, {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });
  }
  UpdateHP(data) {
    this.hp = data.hp;
    this.hpTexto.setText(`HP ${this.hp}`);
  }
  UpdateLVL(data) {
    this.lvl = data.lvl;
    this.levelText.setText(`LVL:${this.lvl}`);
  }
}
