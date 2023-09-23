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
  init(data){
    this.hp=data.hp || 200
   
  }

  create() {

    this.hpTexto = this.add.text(50, 60, `HP ${  this.hp}`, {
      fontSize: "50px",
    });
    events.on("UpdateHP", this.UpdateHP, this);

}
UpdateHP(data) {
  this.hp = data.hp;
  this.hpTexto.setText(`HP ${this.hp}`);
}


}
