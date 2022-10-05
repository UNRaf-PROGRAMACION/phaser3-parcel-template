class Carta {
    boton;
    constructor(x, y, img1, img2, img3, scene, callback1, callback2) {
            this.boton = scene.add.image(x, y, img1.setScale(0.5)), 
            scene.add.image(x-50, y-50, img2.setScale(0.2))
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback1))
        }
        desactivar(callback1){
            callback1();
            this.boton.visible = false;
        }
    }

export default Carta;