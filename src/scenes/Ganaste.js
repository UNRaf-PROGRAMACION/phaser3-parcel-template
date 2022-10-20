import Phaser from 'phaser'




export default class Ganaste extends Phaser.Scene
{
     constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Ganaste");
    }

    init(data) {
        //console.log(data);
        this.nivel = data.nivel + 1  ?? 1;
        this.corazones = data.corazones;
    }
    


    create()
    {
        let win = false;

        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "jardin").setScale(1.1);

        
        let miSprite = this.add.sprite(this.cameras.main.centerX, 700,"sprite_alicia").setScale(3.5);
         miSprite.anims.play('animacion_alicia',true);

  
        
        // Boton para volver a Menu principal
        let menu = this.add.image(600, 1400, 'atras').setScale(0.26)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MapaNiveles', {
            nivel: this.nivel, 
            corazones: this.corazones}));
        //this.clic.play();

    }

    

}