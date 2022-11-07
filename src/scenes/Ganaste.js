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
    if(!this.scale.isFullscreen){
        this.scale.startFullscreen();
    }
        let win = false;

        // Fondo del menú principal
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "fondo_ganaste").setScale(1.1);
        this.ganaste = this.add.image ( this.cameras.main.centerX, 500, 'boton_ganaste').setScale(0.7);
        this.ganaste = this.add.text(175, 445, '¡GANASTE!', {
            fontFamily: "Rockwell",
            fontSize: "70px",
            color: "#003333",
          });

        
        // Boton para pasar de nivel
        let menu = this.add.image(600, 1400, 'boton_flecha2').setScale(0.25)
        menu.setInteractive()        
        menu.on('pointerdown', () => this.scene.start('MapaNiveles', {
            nivel: this.nivel, 
            corazones: this.corazones}));
        //this.clic.play();

    }

    

}