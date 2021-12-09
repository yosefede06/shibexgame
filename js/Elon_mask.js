const walkerWidth =  90; //30
const walkerHeight = 135; //45

const walker1Image = './images/elonShibex.png';
const walker2Image = './images/elonShibex.png';
const walker3Image = './images/elonShibex.png';

const walkerSpeed = 2;

// const walker1Type = 0;
//
// const walker2Type = 1;

class Walker {

    constructor(canvas, ctx, gameCtx, FPS, posY) {
        // Canvas
        this.canvas = canvas
        this.ctx = ctx
        this.gameCtx = gameCtx
        // Time
        this.FPS = FPS

        this.position = {
            x: canvas.size.width,
            y: this.canvas.baseLine - walkerHeight/2,
            // initialPosY: this.canvas.baseLine,
        }

        this.size = {
            width: walkerWidth,
            height: walkerHeight
        }

        this.image = {
            imageInstance: undefined,
            imageWalker1Path: walker1Image,
            imageWalker2Path: walker2Image,
            imageWalker3Path: walker3Image,
            rows: 2,
            rowIndex: 0,
            frames: 4,
            frameIndex: 0,
        }

        this.spriteChangeTime = .1
        this.speedX = walkerSpeed
        this.speedY = 0
        this.init()
    }

    init() {

        const walkerType = Math.floor(Math.random() * 3)
        this.image.imageInstance = new Image()
        this.image.imageInstance.src = this.image.imageWalker1Path
    }

    move(playerSpeed) {
        this.position.x -= (playerSpeed + this.speedX)
    }
}