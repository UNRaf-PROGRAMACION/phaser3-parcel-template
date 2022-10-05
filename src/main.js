import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import {Cartas} from './scenes/cartas'
import {Configuraciones} from './scenes/configuraciones'
import {Creditos} from './scenes/creditos'
import {Escenario1} from './scenes/escenario1'
import {Escenario2} from './scenes/escenario2'
import {Instrucciones} from './scenes/instrucciones'
import {MainMenu} from './scenes/mainmenu'
import {Preloads} from './scenes/preloads'
import {Tablero} from './scenes/tablero'
import Jugador from './scenes/jugador'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 800,
			height: 600,
		},
		max: {
			width: 1600,
			height: 1200,
		},
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false,
		}
	},
	scene: [Jugador , HelloWorldScene, Cartas, Instrucciones, Escenario1, Escenario2, Configuraciones, Tablero, Preloads, MainMenu, Creditos]
}

export default new Phaser.Game(config)

