const sizeCoin = 40; //25

const speedCoin = 7;

const imageCoin = './images/coinsShibex.png';

class Coin {
    /**
     * Constructor of the Coin class
     * @param canvas the canvas where there is the coin
     * @param ctx
     * @param FPS frame rate
     * @param positionX the position of the coin on x axis
     * @param positionY the position of the coin on y axis
     * @param index the frame index
     */
    constructor(canvas, ctx, FPS, positionX, positionY, index) {
        this.canvas = canvas
        this.ctx = ctx

        this.position = {
            x: positionX,
            y: positionY
        }

        this.size = {
            width: sizeCoin,
            height: sizeCoin
        }

        this.speed = speedCoin
        this.FPS = FPS

        this.image = {
            imageInstance: undefined,
            imageSource: imageCoin,
            frames: 8,
            frameIndex: index
        }

        this.flipCoinTime = .1
        this.init()
    }

    /**
     * This method initializes the image of the coin on the window
     */
    init() {
        // Image for the coins
        this.image.imageInstance = new Image()
        this.image.imageInstance.src = this.image.imageSource

        // Asign frameIndex value
        this.image.frameIndex -= Math.floor(this.image.frameIndex + 1 / this.image.frames)
    }

    /**
     * This method make the coin move with the background according to the player's speed
     * @param playerSpeed the player's speed
     */
    move(playerSpeed) {
        // same as for the background when it's not iron
        const compensatedSpeed = ((60 / this.FPS) * playerSpeed)
        this.position.x -= compensatedSpeed
    }
    isTouching(minX, minY, maxX, maxY){
        return (minX < this.position.x + this.size.width && maxX > this.position.x
            && minY < this.position.y + this.size.height && maxY > this.position.y)

    }

}