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
    super("ui");
  }
    
  init(data) {
    this.level = data.level;
    this.clues = data.clues;
    this.life = data.life;
  }

  create() {
    console.log("ui");
    console.log(this.level, this.clues, this.life);
    this.levelText = this.add.text(10, 10, `Nivel: ${this.level}`);
    this.add.text(320, 10, `Pistas acumuladas: ${this.clues}`);
    this.add.text(710, 10, `Vida: ${this.life}`);

    events.on("passLevel", this.passLevel, this);
  }

  passLevel(data) {
    console.log(this.level);
    this.level = data.level;
    this.levelText.setText(`Nivel: ${this.level}`)
  }

}
