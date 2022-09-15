import Phaser from 'phaser'
let scoreText;
let score = 0;
// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
//import { sharedInstance as events } from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)


export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('Custom')
	}

	preload()
    {
    }

    create()
    {
        scoreText = this.add.text(this.cameras.main.centerX - this.cameras.main.centerX*0.9,
            this.cameras.main.centerY, "Hola en unos instantes\n te llevaremos al logo :)", {
            fontSize: "32px",
          });
          setTimeout(() => {
            // Instrucción que sera llamada despues del segundo
            this.scene.switch(
              "Menu",
            );
          }, 5000); // Ese número es la cantidad de milisegundos
    }
    update()
    {

    }
}
