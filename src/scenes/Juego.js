import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import Ganaste from './Ganaste'





export default class Juego extends Phaser.Scene
{
    nivel
	init (data){
        console.log(data)
        nivel = data.nivel
        
    }


    preload()
    {
    }

    create()
    {
        switch(this.nivel){
            case 1: {
                //logica cantidad cartas y ubicacion
                break;
            }                
            case 2: {
                //logica cantidad cartas y ubicacion
                break;
            }
            case 3: {
                //logica cantidad cartas y ubicacion
                break;
            }
            case 4: {
                //logica cantidad cartas y ubicacion
                break;
            }
        }
    }

    update()
    {

        //si gane ! ver si va a la escena ganaste o queda aca
        events.emit('pasar-nivel')
        mostrar escena de Ganaste
        y en la escena ganaste link a seleccion de nivel
    }

}