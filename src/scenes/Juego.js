import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import Ganaste from './Ganaste'
import Perdiste from './Perdiste'





export default class Juego extends Phaser.Scene
{
  
    nivel
	init (data){
        console.log(data)
        this.nivel = data.nivel
        
    }


    preload()
    {
    }

    create()
    {
        switch(this.nivel){
            case 1: {
                //logica cantidad cartas y ubicacion
                this.coordenadas.push([240,500]);
                break;
            }                
            case 2: {
                //logica cantidad cartas y ubicacion
                this.coordenadas.push([240,300]);
                break;
            }
            case 3: {
                //logica cantidad cartas y ubicacion
                this.coordenadas.push([240,375]);
                break;
            }
            case 4: {
                //logica cantidad cartas y ubicacion
                this.coordenadas.push([180,300]);
                break;
            }
            case 5: {
                //logica cantidad cartas y ubicacion
                this.coordenadas.push([144,300]);
                break;
            }
        }
    
        //Para ir a la pantalla de ganaste una vez que se dan vuelta todas las cartas
        if (coincidencias === 2) {
           scene.ganaste();
          }
    }

    update()
    {
        //si gane ! ver si va a la escena ganaste o queda aca
        events.emit('pasar-nivel')

      if (this.perdiste) {
        return
      }
    }
  
    perdiste() {
      this.scene.start('Perdiste');
    }
  
    ganaste() {
      this.scene.start('Ganaste');
    }
  
    onSecond() {
      if (!this.perdiste) {
        this.initialTime = this.initialTime - 1; // One second
        this.timeText.setText(this.initialTime);
        if (this.initialTime == 0) {
          this.timedEvent.paused = true;
          this.perdiste()
        }
      }
    }

    }

