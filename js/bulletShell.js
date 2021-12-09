const bulletShellWidth = 10;
const bulletShellHeight = 15;
const speedYBulletShell = 1.09;
const bulletShellImage = './images/bulletShell.png';

class BulletShell {

    constructor(canvas, ctx, FPS, playerPos, gameCtx) {

        this.canvas = canvas
        this.ctx = ctx
        this.gameCtx = gameCtx

        this.position = {
            x: playerPos.x + 14, // todo: change it ?
            y: playerPos.y + 20
        }

        this.size = {
            width: bulletShellWidth, // todo: change it ?
            height: bulletShellHeight  // todo: change it ?
        }

        this.speedY = speedYBulletShell

        this.FPS = FPS

        this.image = {
            imageInstance: undefined,
            imageSource: bulletShellImage,
            frames: 8,
            frameIndex: 0,
            spriteChangeTime: .05
        }
        this.init()
    }

    init() {
        this.image.imageInstance = new Image()
        this.image.imageInstance.src = this.image.imageSource
    }

    move(playerPosX) {
        this.position.x -= playerPosX
        this.position.y *= this.speedY
    }
}