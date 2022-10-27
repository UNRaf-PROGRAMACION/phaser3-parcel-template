// @ts-ignore
import Phaser from 'phaser'




export default class Final extends Phaser.Scene
{
     constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Final");
    }

    init(data) {
        //console.log(data);
        this.nivel = data.nivel + 1  ?? 1;
        this.corazones = data.corazones;
        //mostrar en pantalla el puntaje final
        this.puntajeFinal = data.corazones;
    }
    


    create()
    {
        let win = false;

        // Fondo de la pantalla final
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_nivel1").setScale(1.1);
        this.final = this.add.image ( this.cameras.main.centerX, 500, 'creditos_ajustes').setScale(0.7);
        this.final = this.add.text(175, 475, '¡FELICIDADES!', {
            fontFamily: "Rockwell",
            fontSize: 70,
            color: "#FCE4CA",
          });

        this.puntaje = this.add.image ( this.cameras.main.centerX, 800, 'jugar_boton').setScale(0.7);
        this.puntajeFinal = this.add.text (175,775, 'Corazones obtenidos:', this.corazones, {
            fontFamily: "Rockwell",
            fontSize: 70,
            color: "#FCE4CA",
        });


        
        // Boton para volver al menu principal
        let menu = this.add.image(600, 1400, 'boton_menu').setScale(0.25)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MenuPrincipal'));
        //this.clic.play();

    }

    

}