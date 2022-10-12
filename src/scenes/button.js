class Button {
    constructor(x, y, texture, scene, callback ) {
        const button = scene.add.text(x, y, texture)

        .setOrigin(0.5)
        .setPadding(10)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => callback())
        .on('pointerover', () => button.setScale(1.1))
        .on('pointerout', () => button.setScale(1))
    }
}

export default Button;