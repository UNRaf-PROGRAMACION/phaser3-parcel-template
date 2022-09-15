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
		super('Menu')
	}

	preload()
    {
    }

    create()
    {
        this.add.image(400, 300, 'sky')

        const particles = this.add.particles('red')

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        })

        const logo = this.physics.add.image(250, 150, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

        emitter.startFollow(logo)
        scoreText = this.add.text(30, 6, "Score: 0", {
            fontSize: "32px",
          });
          setTimeout(() => {
            // Instrucción que sera llamada despues del segundo
            this.scene.switch(
              "Custom",
            );
          }, 10000); // Ese número es la cantidad de milisegundos
        }
        
    update()
    {
        setTimeout(() => {
            // Instrucción que sera llamada despues del segundo
            score +=1, scoreText.setText("Score: " + score);
          }, 5000); // Ese número es la cantidad de milisegundos
    }
}
