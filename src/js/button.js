import Phaser from "phaser"


export default class Button
{
    constructor(scene, x, y, text, size, callback, scale)
    {
        this.container = scene.add.container(x, y)
        this.img = scene.add.image(0, 0, 'botonMarco').setInteractive({ useHandCursor: true })
        .on("pointerdown", () => callback())
        .on("pointerover", ()=> this.img.setScale(scale - 0.02))
        .on("pointerout", ()=> this.img.setScale(scale))
        this.txt = scene.add.text(0, 0, text, {fontSize: size})
        .setOrigin(0.5)
        .setStyle({fontFamily: 'asian'})
        this.container.add([this.img, this.txt])
    }
}


function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}

/* function Borrar(bAtaque){
    bAtaque.visible = false;
    bObEstats.visible = false;
    bObjeto.visible = false;

    if(bAtaque.visible === true){
    bAtaque.visible = false;;
    };
}; */

loadFont("asian", "../public/assets/fuentes/OPTIAsian.otf");

