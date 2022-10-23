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
        this.ganaste = this.add.image ( this.cameras.main.centerX, 300, 'creditos_ajustes').setScale(0.7);
        this.ganaste = this.add.text(100, 245, '¡GANASTE!', {
            fontFamily: "Rockwell",
            fontSize: 100,
            color: "#000000",
          });


        
        let miSprite = this.add.sprite(this.cameras.main.centerX, 1200,"sprite_alicia").setScale(2.5);
         miSprite.anims.play('animacion_alicia',true);

  
        
        // Boton para volver a Menu principal
        let menu = this.add.image(600, 1400, 'boton_flecha').setScale(0.25)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MapaNiveles', {
            nivel: this.nivel, 
            corazones: this.corazones}));
        //this.clic.play();

    }

    

}