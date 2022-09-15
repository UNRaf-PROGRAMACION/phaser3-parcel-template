import Phaser from 'phaser'
let scoreText;
let score = "";
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
		super('Preload')
	}

	preload()
    {
        this.load.setBaseURL('http://labs.phaser.io')

        this.load.image('sky', 'assets/skies/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
        this.load.image('red', 'assets/particles/red.png')
    }

    create()
    {
        scoreText = this.add.text(this.cameras.main.centerX - this.cameras.main.centerX*0.9,
          this.cameras.main.centerY, "Cargando: █", {
            fontSize: "32px",
          });
          setTimeout(() => {
            // Instrucción que sera llamada despues del segundo
            this.scene.start(
              "Menu",
            );
          }, 500); // Ese número es la cantidad de milisegundos
    }
    update()
    {
        score +="█", scoreText.setText("Cargando: \n" + score);
    }
}
