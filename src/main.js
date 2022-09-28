import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import Ganaste from './scenes/Ganaste'
import MenuPrincipal from './scenes/MenuPrincipal'
import MapaNiveles from './scenes/MapaNiveles'
import Nivel1 from './scenes/Nivel1'
import Nivel2 from './scenes/Nivel2'
import Nivel3 from './scenes/Nivel3'
import Nivel4 from './scenes/Nivel4'
import Nivel5 from './scenes/Nivel5'
import Nivel6 from './scenes/Nivel6'
import Nivel7 from './scenes/Nivel7'
import Nivel8 from './scenes/Nivel8'
import Nivel9 from './scenes/Nivel9'
import Nivel10 from './scenes/Nivel10'
import Perdiste from './scenes/Perdiste'
import Preload from './scenes/Preload'

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
	scene: [HelloWorldScene, Ganaste, MapaNiveles,MenuPrincipal, Nivel1, Nivel2, Nivel3, Nivel4, Nivel5, Nivel6, Nivel7, Nivel8, Nivel9, Nivel10, Perdiste, Preload]
}

export default new Phaser.Game(config)
