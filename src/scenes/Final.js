//@ts-ignore
import Phaser from 'phaser'




export default class Final extends Phaser.Scene
{
     constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Final");
    }

   
    
    init(data) {
        this.nivel = data.nivel ?? 1;
        this.corazonesTotal = data.corazones ?? 0;
        this.corazones = data.corazones;
    
    }
    


    create()
    {
        let win = false;
       

        // Fondo de la pantalla final
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_final").setScale(1.1);
        this.final = this.add.text(145, 280, '¡FELICIDADES!', {
            fontFamily: "Rockwell",
            fontSize: 60,
            color: "#FCE4CA",
          });

          console.log (this.corazones),
        this.puntajeFinal = this.add.text (175, 600, 'Corazones obtenidos:', [this.corazones], {
            fontFamily: "Rockwell",
            fontSize: 70,
            color: "#FCE4CA",
        });


        
        // Boton para volver al menu principal
        let menu = this.add.image(350, 800, 'boton_menu').setScale(1.0)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MenuPrincipal', {nivel: 1}));
        //this.clic.play();

        //Animación Alicia
        let SpriteAlicia = this.add.sprite(this.cameras.main.centerX, 1200,"sprite_alicia").setScale(2.5);
        SpriteAlicia.anims.play('animacion_alicia',true);
    }
}