const rocketWidth = 120; // 80
const rocketHeight = 60; // 40
const rocketImage = './images/rocketFire.png';
const rocketSpeed = 20;


class Rocket_spacex {

    constructor(canvas, ctx, warningPosY, gamecontext) {

        this.canvas = canvas
        this.ctx = ctx
        this.gameContext = gamecontext

        this.position = {
            x: canvas.size.width,
            y: warningPosY
        }

        this.size = {
            width: rocketWidth,
            height: rocketHeight
        }

        this.image = {
            imageInstance: undefined,
            imageSource: rocketImage,
        }

        this.speed = rocketSpeed
        this.init()
    }

    init() {
        this.image.imageInstance = new Image()
        this.image.imageInstance.src = this.image.imageSource
    }

    move() {
        this.position.x -= this.speed
    }
}

const warningSize = 100; //50
//
const rocketWarningImage = './images/warningShibex.png';
//
const timeoutWarning = 3000;
//
const timeoutShoot = 1000;



class Warning {
    constructor(canvas, ctx, playerPosY, gameContext) {
        this.canvas = canvas
        this.ctx = ctx
        this.gameContext = gameContext

        this.position = {
            x: canvas.size.width - 60,
            y: playerPosY
        }

        this.size = {
            width: warningSize,
            height: warningSize
        }

        this.image = {
            imageInstance: undefined,
            imagePath: rocketWarningImage,
            frames: 2,
            frameIndex: 0
        }

        this.isAboutToShoot = false
        this.init()
    }

    init() {
        this.image.imageInstance = new Image()
        this.image.imageInstance.src = this.image.imagePath
        this.changeSprite()
    }

    move(playerPosY) {
        if (!this.isAboutToShoot) {
            this.position.y = playerPosY // it is directed toward the player
        }
    }

    changeSprite() {

        setTimeout(() => {
            if (!this.gameContext.isGameOver) {
                this.image.frameIndex = 1
                this.isAboutToShoot = true
                this.shootRocket()
            }

            // Audio
            if (!this.gameContext.isGameOver) {
                this.gameContext.audio.tracks.warningSong.play()
            } else {
                this.gameContext.audio.tracks.warningSong.pause()
            }
        }, timeoutWarning)

    }

    shootRocket() {
        //bug of the rocket adding to the rocket list when the player is already dead
        if (!this.gameContext.isGameOver && this.gameContext.isPlaying) {
            setTimeout(() => {
                this.gameContext.createRocket(this)
                this.gameContext.audio.tracks.rocketSong.play()
            }, timeoutShoot);

        }

    }


}
