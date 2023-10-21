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
    this.hp = data.hp || 200;
    this.lvl = data.lvl || 1;
    this.maxHp = data.maxHp || 200;
    this.exp = data.exp || 0;
  }

  create() {

    this.healthBackground = this.add.rectangle(250, 73, 300, 25, 0x000000);
    this.healthBackground.setOrigin(0);

    this.healthBar = this.add.rectangle(250, 73, 300, 25, 0xFFFFFF);
    this.healthBar.setOrigin(0);
    
    events.on("UpdateHP", this.UpdateHP, this);
    events.on("UpdateLVL", this.UpdateLVL, this);
    this.levelText = this.add.text(50, 57, `LVL ${this.lvl}`, {
      fontSize: "50px",
      fontFamily: "Roboto Mono",
    });

    events.on("UpdateHP", this.updateHealthBar, this);
    events.on("UpdateMaxHp", this.updateMaxHp, this)


  }
  UpdateHP(data) {
    this.hp = data.hp;
    console.log("🚀 ~ file: UI.js:51 ~ UI ~ UpdateHP ~ this.hp:", this.hp)
    // this.hpTexto.setText(`HP ${this.hp}`);
  }
  UpdateLVL(data) {
    this.lvl = data.lvl;
    this.levelText.setText(`LVL:${this.lvl}`);
  }
  updateHealthBar() {
    const maxWidth = 300;
    const currentWidth = (this.hp/this.maxHp) * maxWidth;

    this.healthBar.displayWidth = currentWidth;
  }
  updateMaxHp(data) {
    this.maxHp = data.maxHp;
    const maxWidth = 300;
    const currentWidth = (this.hp / this.maxHp) * maxWidth;
  
    this.healthBar.displayWidth = currentWidth;
  
    this.healthBackground.displayWidth = maxWidth;
  }

  
}
