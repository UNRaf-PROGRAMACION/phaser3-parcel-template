// @ts-ignore
import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import Ganaste from './scenes/Ganaste'
import MenuPrincipal from './scenes/MenuPrincipal'
import MapaNiveles from './scenes/MapaNiveles'
import Juego from './scenes/Juego'
import Perdiste from './scenes/Perdiste'
import Preload from './scenes/Preload'

const config = {
	type: Phaser.AUTO,
	width: 720,
	height: 1500,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		min: {
			width: 300,
			height: 625,
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
	scene: [HelloWorldScene, Preload, MapaNiveles, MenuPrincipal, Juego, Ganaste, Perdiste],
}

export default new Phaser.Game(config)
