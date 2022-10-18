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

        
        //agregar animación Alicia
        this.add.sprite(200, 1200, 'sprite_alicia');
        this.anims.create({
            key: 'sprite_alicia',
            frames: this.anims.generateFrameNumbers('sprite_alicia', { start: 0, end: 4 }),
            frameRate: 4,
            repeat: -1,
         });

         //this.miSprite = this.add.sprite(200, 1200, 'sprite_alicia');
         //this.miSprite.anims.play('animacion_alicia');

  
        
        // Boton para volver a Menu principal
        let menu = this.add.image(600, 1400, 'atras').setScale(0.26)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MapaNiveles', {
            nivel: this.nivel, 
            corazones: this.corazones}));
        //this.clic.play();

    }

    

}