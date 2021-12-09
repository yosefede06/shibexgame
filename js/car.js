const carWidth = 400;
const carHeight = 115;
const carImg = './images/car.png';
const carSpeed = 3;
class Car{
    constructor(canvas, ctx, gameCtx, FPS, posY) {
        // Canvas
        this.canvas = canvas
        this.ctx = ctx
        this.gameCtx = gameCtx
        // Time
        this.FPS = FPS

        this.position = {
            x: canvas.size.width,
            y: this.canvas.baseLine - carHeight/2 + 30,
            // initialPosY: this.canvas.baseLine,
        }

        this.size = {
            width: carWidth,
            height: carHeight,
        }

        this.image = {
            imageInstance: undefined, //just one img
//            rows: 2,
//            rowIndex: 0,
//            frames: 4,
//            frameIndex: 0,
        }

        this.spriteChangeTime = .1
        this.speedX = carSpeed
        this.speedY = 0
        this.init()

    }

    init() {

        this.image.imageInstance = new Image()
        this.image.imageInstance.src = carImg

        // Audio
        if (!this.gameCtx.isGameOver) {
            this.gameCtx.audio.tracks.truck.play()
        } else {
            this.gameCtx.audio.tracks.truck.pause()
        }


    }

    move(playerSpeed) {
        this.position.x -= (playerSpeed + this.speedX)
    }
}