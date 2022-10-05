class Carta {
    boton;
    constructor(x, y, img, scene, callback1, callback2) {
            this.boton = scene.add.image(x, y, img.setScale(0.5))
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback1))
        }
        desactivar(callback1){
            callback1();
            this.boton.visible = false;
        }
    }

export default Carta;