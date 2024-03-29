class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: './asset_game/maps/DemoLower.png',
        upperSrcSrc: './asset_game/maps/DemoUpper.png',
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
            }),
        }
    },
    Kitchen: {
        lowerSrc: './asset_game/maps/KitchenLower.png',
        upperSrcSrc: './asset_game/maps/KitchenUpper.png',
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 1,
            }),
            npc1: new GameObject({
                x: 9,
                y: 2,
            }),
            npc2: new GameObject({
                x: 10,
                y: 4,
            }),
        }
    },
}